<script>
  import Family from "./components/Family.svelte";
  import Appearance from "./components/Appearance.svelte";
  import Shirt from "./components/Shirt.svelte";

  let isVisible = $state(false);

  let mainMenu = $state([{
    title: "Somiglianza familiare",
    icon: "./images/icons/family.svg",
    iconActive: "./images/icons/family-active.svg",
    active: true,
  }, {
    title: "Capelli e barba",
    icon: "./images/icons/head.svg",
    iconActive: "./images/icons/head-active.svg",
    active: false,
  }, {
    title: "Tratti del viso",
    icon: "./images/icons/body.svg",
    iconActive: "./images/icons/body-active.svg",
    active: false,
  }, {
    title: "Stile e abbigliamento",
    icon: "./images/icons/shirt.svg",
    iconActive: "./images/icons/shirt-active.svg",
    active: false,
  }]);

  function toggleMenu(index) {
    mainMenu.forEach((item, i) => {
      item.active = i === index;
    });
  }

  function nextMenu() {
    const currentIndex = mainMenu.findIndex((item) => item.active);
    const nextIndex = currentIndex + 1;

    if (nextIndex < mainMenu.length) {
      toggleMenu(nextIndex);
    }
  }

  function prevMenu() {
    const currentIndex = mainMenu.findIndex((item) => item.active);
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      toggleMenu(prevIndex);
    }
  }

  // Ascolta i messaggi dal client (FiveM)
  window.addEventListener("message", (event) => {
    if (event.data.action === "open") {
      isVisible = true;
    }
  });

  function closeMenu() {
    isVisible = false;
    fetch("https://your_resource_name/closeUi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
</script>

{#if isVisible}
<main class="h-screen w-screen" style="background: radial-gradient(circle, #3D8D6E, #143137);">
  <div class="w-full h-full" style="background-image: url(./images/bg.png); background-size: cover;">
  <!-- Immagine personaggio che andrà sostituita col pg -->
  <img src="./images/character.png" alt="character" class="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-5/6" />

  <!-- Contenuto Editor Destra -->
  <div class="max-h-[calc(100vh-64px)] overflow-auto border border-white/10 bg-black/10 backdrop-blur-md p-7 rounded-[20px] h-fit min-w-[398px] absolute top-1/2 right-[149px] -translate-y-1/2">
    {#if mainMenu[0].active}    
      <Family title={mainMenu[0].title} />
    {/if}
    
    <!-- Caratteristiche -->
    {#if mainMenu[1].active}
      <Appearance title={mainMenu[1].title} />
    {/if}

    <!-- Vestiti -->
    {#if mainMenu[3].active}
      <Shirt title={mainMenu[3].title} />
    {/if}

    <div class="flex flex-row gap-x-[10px] mt-4">
      {#if !mainMenu[0].active}
      <!-- Previous Button -->
      <button onclick={prevMenu} class="px-4 hover:scale-105 border border-white/15 hover:border-white/50 bg-gradient-to-b from-white/0 to-white/15 backdrop-blur-sm hover:backdrop-blur-md transition-all rounded-2xl">
        <img src="./images/icons/arrow-left-2.svg" alt="shuffle" />
      </button>
      {/if}

      <!-- Next Button -->
      <button onclick={nextMenu} class="w-full p-[1px] bg-gradient-to-b from-[#FFE5CC] to-[#D45F3B] rounded-2xl hover:scale-105 transition-all">
        <div class="w-full uppercase py-3 bg-gradient-to-b from-[#FFBA68] to-[#FD7B5E] transition-all rounded-2xl text-[#292D32] font-semibold text-md">
          Continua
        </div>
      </button>
    </div>
  </div>
    
  <!-- Barra laterale destra character creator -->
  <div class="h-fit w-fit p-[1px] rounded-[20px] absolute top-1/2 right-8 -translate-y-1/2" style="background-image: linear-gradient(to bottom, #2EB48A 0%,  #2EB48A 8%, #6C938C 16%, #456D68 25%, #456D68 100%);">
    <div class="w-full h-full flex flex-col gap-[9px] gap-y-2.5 border border-transparent p-[9px] rounded-[20px] backdrop-blur-lg" style="background-color: #234F4B;">
      {#each mainMenu as item, i}
        {#if item.active} 
          <button class="w-fit h-fit hover:scale-105 transition-all shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[78px] h-[78px] flex items-center justify-center">
              <img src="{item.iconActive}" alt="{item.title}">
            </div>
          </button>
        {:else}
          <button onclick={() => toggleMenu(i)} class="hover:scale-105 bg-gradient-to-b from-white/0 to-white/15 w-20 h-20 rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="{item.icon}" alt="{item.title}">
          </button>
        {/if}
      {/each}
    </div>
  </div>
</div>

<!-- Start button -->
<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-x-6">
  <button class="hover:scale-105 border border-white/15 hover:border-white/50 bg-gradient-to-b from-white/0 to-white/15 backdrop-blur-sm hover:backdrop-blur-md transition-all flex gap-x-4 uppercase py-[22px] px-[52px] rounded-2xl text-white font-semibold text-lg">
    <img src="./images/icons/shuffle.svg" alt="shuffle" />
    Random
  </button>
  
  <button class="p-[1px] bg-gradient-to-b from-[#FFE5CC] to-[#D45F3B] rounded-2xl hover:scale-105 transition-all">
    <div class="flex gap-x-4 uppercase py-[22px] px-[52px] bg-gradient-to-b from-[#FFBA68] to-[#FD7B5E] transition-all rounded-2xl text-[#292D32] font-semibold text-lg">
      <img src="./images/icons/play.svg" alt="play" />
      <span>
        Start game
      </span>
    </div>
  </button>
  </div>
</main>
{/if}

<style>
</style>
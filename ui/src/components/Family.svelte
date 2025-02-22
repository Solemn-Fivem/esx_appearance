<script>
  import Range from "./utils/Slider.svelte"	
	let value = 50;
  let fathers = $state(["Donald", "John", "Michael", "David", "James"]);
  let mothers = $state(["Viktoria", "Anna", "Maria", "Elena", "Olga"]);

  let fatherIndex = $state(0);
  let motherIndex = $state(0);

  let { title } = $props();
</script>

<!-- Character Appearance -->
<div class="flex items-center gap-x-2">
  <img src="/images/icons/family-orange.svg" alt="head orange">
    <h2 class="text-white text-sm font-medium uppercase tracking-[2px]">{title}</h2>
</div>

<!-- Divider -->
<div class="flex my-6 items-center">
  <div class="w-[256px] h-1 bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-full"></div>
  <div class="w-full h-[1px] bg-white/10"></div>
</div>

<!-- Parents -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] mb-4">Genitori</h2>

<!-- Father -->
<div class="rounded-[10px] border border-white/15 flex py-[10px] ps-6 pe-[10px] justify-between items-center mb-4 relative">
  <span class="uppercase font-normal text-xs text-white/30 tracking-wider absolute top-0 px-1 left-[20px] -translate-y-1/2 bg-gradient-to-r from-[#285C4E] to-[#25574B]">Padre</span>
  <span class="text-white font-medium text-sm tracking-wider">{fathers[fatherIndex]}</span>
  
  <!-- Arrows -->
  <div class="flex gap-x-2">
    <button onclick={() => fatherIndex > 0 ? fatherIndex-- : null } class:opacity-50={fatherIndex == 0} class="bg-gradient-to-b from-[#A2FFE2] to-[#096457] rounded-lg p-[1px]">
      <div class="bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-lg w-[33px] h-[33px] flex items-center justify-center">
        <img src="/images/icons/arrow-left.svg" alt="arrow-left">
      </div>
    </button>

    <button onclick={() => fatherIndex < (fathers.length -1) ? fatherIndex++ : null } class:opacity-50={fatherIndex == (fathers.length -1)} class="bg-gradient-to-b from-[#A2FFE2] to-[#096457] rounded-lg p-[1px]">
      <div class="bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-lg w-[33px] h-[33px] flex items-center justify-center">
        <img src="/images/icons/arrow-right.svg" alt="arrow-right">
      </div>
    </button>
  </div>
</div>

<!-- Mother -->
<div class="rounded-[10px] border border-white/15 flex py-[10px] ps-6 pe-[10px] justify-between items-center mb-5 relative">
  <span class="uppercase font-normal text-xs text-white/30 tracking-wider absolute top-0 px-1 left-[20px] -translate-y-1/2 bg-gradient-to-r from-[#285C4E] to-[#25574B]">Madre</span>
  <span class="text-white font-medium text-sm tracking-wider">{mothers[motherIndex]}</span>
  
  <!-- Arrows -->
  <div class="flex gap-x-2">
    <button onclick={() => motherIndex > 0 ? motherIndex-- : null } class:opacity-50={motherIndex == 0}  class="bg-gradient-to-b from-[#A2FFE2] to-[#096457] rounded-lg p-[1px]">
      <div class="bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-lg w-[33px] h-[33px] flex items-center justify-center">
        <img src="/images/icons/arrow-left.svg" alt="arrow-left">
      </div>
    </button>

    <button onclick={() => motherIndex < (mothers.length -1) ? motherIndex++ : null } class:opacity-50={motherIndex == (mothers.length -1)} class="bg-gradient-to-b from-[#A2FFE2] to-[#096457] rounded-lg p-[1px]">
      <div class="bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-lg w-[33px] h-[33px] flex items-center justify-center">
        <img src="/images/icons/arrow-right.svg" alt="arrow-right">
      </div>
    </button>
  </div>
</div>

<!-- Similarity -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] mb-4">Somiglianza</h2>

<!-- Slider -->
<div>
  <Range on:change={(e) => value = e.detail.value} id="basic-slider" />
  <div class="flex justify-between uppercase font-normal text-xs text-white/30 tracking-wider mt-4">
    <span>Padre</span>
    <span>Madre</span>
  </div>
</div>
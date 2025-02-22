<script>
    let { title } = $props();

    let shirts = $state([
        { id: 1, name: "T-Shirt", active: true },
        { id: 2, name: "Polo", active: false },
        { id: 3, name: "Henley", active: false },
        { id: 4, name: "Tank Top", active: false },
        { id: 5, name: "V-Neck", active: false },
        { id: 6, name: "Button-Up", active: false },
        { id: 7, name: "Flannel", active: false },
        { id: 8, name: "Hoodie", active: false },
        { id: 9, name: "Sweatshirt", active: false },
        { id: 10, name: "Turtleneck", active: false },
        { id: 11, name: "Graphic Tee", active: false },
        { id: 12, name: "Baseball Tee", active: false },
        { id: 13, name: "Sleeveless Shirt", active: false },
        { id: 14, name: "Rugby Shirt", active: false },
    ]);

    let pants = $state([
        { id: 1, name: "Jeans", active: true },
        { id: 2, name: "Chinos", active: false },
        { id: 3, name: "Joggers", active: false },
        { id: 4, name: "Sweatpants", active: false },
        { id: 5, name: "Cargo Pants", active: false },
        { id: 6, name: "Dress Pants", active: false },
        { id: 7, name: "Shorts", active: false },
        { id: 8, name: "Track Pants", active: false },
        { id: 9, name: "Corduroy Pants", active: false },
        { id: 10, name: "Leather Pants", active: false }
    ]);

    let shoes = $state([
        { id: 1, name: "Sneakers", active: true },
        { id: 2, name: "Boots", active: false },
        { id: 3, name: "Loafers", active: false },
        { id: 4, name: "Sandals", active: false },
        { id: 5, name: "Dress Shoes", active: false },
        { id: 6, name: "Running Shoes", active: false },
        { id: 7, name: "Slip-Ons", active: false },
        { id: 8, name: "High-Tops", active: false },
        { id: 9, name: "Espadrilles", active: false },
        { id: 10, name: "Chelsea Boots", active: false }
    ]);


    function toggleShirt(index) {
        shirts.forEach((item, i) => {
            item.active = i === index;
        });
    }

    function togglePant(index) {
        pants.forEach((item, i) => {
            item.active = i === index;
        });
    }

    function toggleShoe(index) {
        shoes.forEach((item, i) => {
            item.active = i === index;
        });
    }
</script>

<!-- Character Appearance -->
<div class="flex items-center gap-x-2">
    <img src="./images/icons/shirt-orange.svg" alt="head orange">
    <h2 class="text-white text-sm font-medium uppercase tracking-[2px]">{title}</h2>
</div>

<!-- Divider -->
<div class="flex my-6 items-center">
    <div class="w-[256px] h-1 bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-full"></div>
    <div class="w-full h-[1px] bg-white/10"></div>
</div>

<!-- Shirts -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] mb-4">Magliette</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each shirts as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/tshirt.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => toggleShirt(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/tshirt.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>

<!-- Pants -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] my-4">Pantaloni</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each pants as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/pant.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => togglePant(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/pant.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>

<!-- Shoes -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] my-4">Scarpe</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each shoes as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/shoe.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => toggleShoe(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/shoe.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>
<script>
    let { title } = $props();

    let hairs = $state([
    { id: 1, name: "Short", active: true },
    { id: 2, name: "Medium", active: false },
    { id: 3, name: "Long", active: false },
    { id: 4, name: "Bald", active: false },
    { id: 5, name: "Curly", active: false },
    { id: 6, name: "Straight", active: false },
    { id: 7, name: "Wavy", active: false },
    { id: 8, name: "Buzz Cut", active: false },
    { id: 9, name: "Afro", active: false },
    { id: 10, name: "Mohawk", active: false },
    { id: 11, name: "Dreadlocks", active: false },
    { id: 12, name: "Braided", active: false },
    { id: 13, name: "Pompadour", active: false },
    { id: 14, name: "Mullet", active: false },
    { id: 15, name: "Spiky", active: false },
    { id: 16, name: "Undercut", active: false },
    { id: 17, name: "Side Part", active: false },
    { id: 18, name: "Slicked Back", active: false },
    { id: 19, name: "Faux Hawk", active: false },
    { id: 20, name: "Top Knot", active: false },
    { id: 21, name: "Taper Fade", active: false },
    { id: 22, name: "Skin Fade", active: false },
    { id: 23, name: "Flat Top", active: false },
    { id: 24, name: "Shaggy", active: false },
    { id: 25, name: "Layered", active: false },
    { id: 26, name: "Feathered", active: false },
    { id: 27, name: "Choppy", active: false },
    { id: 28, name: "Messy", active: false },
    { id: 29, name: "French Crop", active: false },
    { id: 30, name: "Caesar Cut", active: false }
]);

let eyebrows = $state([
    { id: 1, name: "Thin", active: true },
    { id: 2, name: "Thick", active: false },
    { id: 3, name: "Arched", active: false },
    { id: 4, name: "Straight", active: false },
    { id: 5, name: "Round", active: false },
    { id: 6, name: "Curved", active: false },
    { id: 7, name: "Flat", active: false },
    { id: 8, name: "Angled", active: false },
    { id: 9, name: "Tapered", active: false },
    { id: 10, name: "Feathered", active: false },
    { id: 11, name: "Bushy", active: false },
    { id: 12, name: "Sparse", active: false },
    { id: 13, name: "Unibrow", active: false },
    { id: 14, name: "High Arch", active: false },
    { id: 15, name: "Low Arch", active: false },
    { id: 16, name: "Short", active: false },
    { id: 17, name: "Long", active: false },
    { id: 18, name: "Pointed", active: false },
    { id: 19, name: "Straight Thick", active: false },
    { id: 20, name: "Soft Angled", active: false },
    { id: 21, name: "Hard Angled", active: false },
    { id: 22, name: "Rounded Thick", active: false },
    { id: 23, name: "Diagonal", active: false },
    { id: 24, name: "Messy", active: false },
    { id: 25, name: "Dramatic", active: false },
    { id: 26, name: "Classic", active: false },
    { id: 27, name: "Natural", active: false },
    { id: 28, name: "Delicate", active: false },
    { id: 29, name: "Ombre", active: false },
    { id: 30, name: "Faded", active: false }
]);

let beards = $state([
    { id: 1, name: "Full Beard", active: true },
    { id: 2, name: "Goatee", active: false },
    { id: 3, name: "Van Dyke", active: false },
    { id: 4, name: "Anchor", active: false },
    { id: 5, name: "Circle Beard", active: false },
    { id: 6, name: "Mutton Chops", active: false },
    { id: 7, name: "Chinstrap", active: false },
    { id: 8, name: "Stubble", active: false },
    { id: 9, name: "French Fork", active: false },
    { id: 10, name: "Balbo", active: false },
    { id: 11, name: "Imperial", active: false },
    { id: 12, name: "Ducktail", active: false },
    { id: 13, name: "Zappa", active: false },
    { id: 14, name: "Soul Patch", active: false },
    { id: 15, name: "Horseshoe", active: false },
    { id: 16, name: "Old Dutch", active: false },
    { id: 17, name: "Verdi", active: false },
    { id: 18, name: "Garibaldi", active: false },
    { id: 19, name: "Hollywoodian", active: false },
    { id: 20, name: "Extended Goatee", active: false },
    { id: 21, name: "Boxed Beard", active: false },
    { id: 22, name: "Short Beard", active: false },
    { id: 23, name: "Medium Beard", active: false },
    { id: 24, name: "Long Beard", active: false },
    { id: 25, name: "Braided Beard", active: false },
    { id: 26, name: "Tapered Beard", active: false },
    { id: 27, name: "Spartan Beard", active: false },
    { id: 28, name: "Bandholz", active: false },
    { id: 29, name: "Viking Beard", active: false },
    { id: 30, name: "Classic Mustache", active: false }
]);

let colors = $state([
    { id: 1, name: "Fair", code: "#20201F", active: true },
    { id: 2, name: "Light Beige", code: "#363128", active: false },
    { id: 3, name: "Medium", code: "#574236", active: false },
    { id: 4, name: "Olive", code: "#502F1F", active: false },
    { id: 5, name: "Tan", code: "#855131", active: false },
    { id: 6, name: "Deep", code: "#A66C45", active: false },
    { id: 7, name: "Dark", code: "#9D6944", active: false },
    { id: 8, name: "Porcelain", code: "#9E714D", active: false },
    { id: 9, name: "Peach", code: "#9A7352", active: false },
    { id: 10, name: "Almond", code: "#A98362", active: false },
    { id: 11, name: "Ash Blonde", code: "#AD8B62", active: false },
    { id: 12, name: "Golden Blonde", code: "#C0A97E", active: false },
    { id: 13, name: "Light Brown", code: "#C0AD84", active: false },
    { id: 14, name: "Dark Brown", code: "#C8AB75", active: false },
    { id: 15, name: "Black", code: "#8E5E3E", active: false },
    { id: 16, name: "Chestnut", code: "#7F4130", active: false },
    { id: 17, name: "Auburn", code: "#74281F", active: false },
    { id: 18, name: "Copper", code: "#A73F27", active: false },
    { id: 19, name: "Red", code: "#A94028", active: false },
    { id: 20, name: "Silver", code: "#9B4122", active: false },
    { id: 21, name: "Platinum Blonde", code: "#9C5435", active: false },
    { id: 22, name: "Blonde", code: "#F5D76E", active: false },
    { id: 23, name: "Ivory", code: "#FFFFFF", active: false },
    { id: 24, name: "Sand", code: "#D8C1A0", active: false },
    { id: 25, name: "Maple", code: "#D27A2C", active: false },
    { id: 26, name: "Caramel", code: "#9E5A34", active: false },
    { id: 27, name: "Espresso", code: "#4B2E2A", active: false },
    { id: 28, name: "Mahogany", code: "#6A3B3A", active: false },
    { id: 29, name: "Deep Black", code: "#1C1C1C", active: false },
    { id: 30, name: "Ash Brown", code: "#9C7D6D", active: false }
]);

function toggleHair(index) {
    hairs.forEach((item, i) => {
        item.active = i === index;
    });
}

function toggleEyebrow(index) {
    eyebrows.forEach((item, i) => {
        item.active = i === index;
    });
}

function toggleBeard(index) {
    beards.forEach((item, i) => {
        item.active = i === index;
    });
}

function toggleColor(index) {
    colors.forEach((item, i) => {
        item.active = i === index;
    });
}
</script>

<!-- Character Appearance -->
<div class="flex items-center gap-x-2">
    <img src="./images/icons/head-orange.svg" alt="head orange">
    <h2 class="text-white text-sm font-medium uppercase tracking-[2px]">{title}</h2>
</div>

<!-- Divider -->
<div class="flex my-6 items-center">
    <div class="w-[256px] h-1 bg-gradient-to-b from-[#35C091] to-[#0B796C] rounded-full"></div>
    <div class="w-full h-[1px] bg-white/10"></div>
</div>

<!-- Hair -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] mb-4">Capelli</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each hairs as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/hair.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => toggleHair(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/hair.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>

<!-- Eyebrow -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] my-4">Sopracciglia</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each eyebrows as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/eyebrow.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => toggleEyebrow(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/eyebrow.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>

<!-- Beard -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] my-4">Barba</h2>

<div class="grid grid-cols-5 gap-[8px] max-h-[132px] overflow-y-auto overflow-x-hidden pe-2">
    {#each beards as item, i}
        {#if item.active}
            <button class="shadow-[0px_4px_0px_0px_rgba(3,54,46,0.25)] w-fit h-fit rounded-[18px] overflow-hidden p-[1px] bg-gradient-to-b from-[#A2FFE2] to-[#096457]">
            <div class="rounded-[17px] bg-gradient-to-b from-[#35C091] to-[#0B796C] w-[58px] h-[58px] flex items-center justify-center">
                <img src="./images/icons/beard.svg" alt="{item.name}">
            </div>
            </button>
        {:else}
            <button onclick={() => toggleBeard(i)} class="bg-gradient-to-b from-white/0 to-white/15 w-[62px] h-[62px] rounded-[18px] flex items-center justify-center border border-white/15 hover:border-white/50 transition-all">
            <img src="./images/icons/beard.svg" alt="{item.name}" class="opacity-50">
            </button>
        {/if}
    {/each}
</div>

<!-- Color -->
<h2 class="text-white text-xs font-medium uppercase tracking-[2px] my-4">Colore</h2>

<div class="grid grid-cols-7 gap-[8px] max-h-[92px] overflow-y-auto overflow-x-hidden pe-2">
    {#each colors as item, i}
        <button onclick={() => toggleColor(i)} class="flex items-center justify-center w-[42px] h-[42px] rounded-xl" style="background-color: {item.code}">
            {#if item.active}
                <img src="./images/icons/check.svg" alt="check">
            {/if}
        </button>
    {/each}
</div>
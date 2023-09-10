<script>
   export let data;
   let isHidden = true
   $: buttontext = "+ Novo tópico"

   function handleBtnClick(e) {
    buttontext = "salvar novo tópico";
    isHidden = !isHidden;
   }
</script>
    
<div class="border-2 border-gray-300  shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-lg flex flex-col items-center">
    {#each data.categories as category}
        <article class="text-xl bg-gray-100 p-1 my-1 font-medium w-full rounded-lg text-center border-2 border-black">
            {category.categoryName}
        </article>
    {/each}
    
    {#if !isHidden }
        <input type="text" name="novaCategoria" placeholder="trabalho" class="border-2 border-black rounded-lg p-1 my-1 ">
    {/if}
    <button class="text-lg px-2 my-2 text-gray-100 rounded-lg bg-blue-600"
    on:click={handleBtnClick}>
      {buttontext}
    </button>
</div>
<style lang="postcss">
    /* :global(html) {
        background-color: theme(colors.gray.100);
    } */
</style>
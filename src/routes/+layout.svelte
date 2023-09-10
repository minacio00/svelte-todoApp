<script>
    import { goto } from "$app/navigation";
  import "../app.css";

</script>
<main class="flex items-center justify-center flex-col h-screen">
  <button on:click={() => goto('/')} class="text-2xl font-semibold mb-4 px-6">
    TodoApp
  </button>
  <div class="mx-auto">
    <slot />
  </div>
</main>

<style lang="postcss">
  :global(html) {
      background-color: theme(colors.gray.200);
  }
</style>

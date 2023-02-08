<script lang="ts">
  export let result: string;

  let copy = 'Copy!';

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    copy = 'Copied!';

    setTimeout(() => {
      copy = 'Copy!';
    }, 5000);
  };
</script>

<div class="flex-1">
  <textarea
    id="result"
    class="p-3 w-full h-80 bg-transparent text-green-500 text-xl border border-gray-300 rounded-lg outline-none resize-none"
    placeholder="Type something to get a result..."
    bind:value={result}
    disabled={true}
  />

  {#if result}
    <div class="text-center mt-5">
      <button
        type="button"
        class="bg-green-500 w-1/4 font-bold upp px-6 py-2 rounded-full hover:bg-green-600 hover:scale-105 transition duration-300"
        on:click={handleCopy}
      >
        {copy}
      </button>
    </div>
  {/if}
</div>

<script lang="ts">
  export let handleSubmit: (e: Event) => Promise<void>;
  export let input: string;
  export let isLoading: boolean;
</script>

<form class="flex-1" on:submit={handleSubmit}>
  <textarea
    id="message"
    class="p-3 w-full h-80 bg-transparent text-xl border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
    placeholder="Type your text here..."
    bind:value={input}
    disabled={isLoading}
  />

  <div class="md:mb-0 my-5 text-center">
    <button
      type="submit"
      disabled={isLoading}
      class="bg-blue-500 w-1/2 lg:w-1/4 font-bold upp px-6 py-2 rounded-full hover:bg-blue-600 hover:scale-105 transition duration-300"
    >
      Fix it!
    </button>
  </div>
</form>

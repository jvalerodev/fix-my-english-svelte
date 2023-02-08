<script>
  import '../app.css';
</script>

<div class="container mx-auto flex items-center h-screen px-10">
  <div class="h-fit w-full">
    <header class="text-center">
      <h1 class="text-center font-bold text-5xl">Fix My English! 🇬🇧</h1>

      <p class="py-12 text-lg text-gray-300">
        Write <span class="font-bold text-green-500">any</span> text in English
        that you want to be
        <span class="font-bold text-green-500">corrected</span>!
      </p>
    </header>

    <main>
      <slot />
    </main>
  </div>
</div>

<style>
  :global(body) {
    background-color: #000;
    color: #fff;
  }
</style>

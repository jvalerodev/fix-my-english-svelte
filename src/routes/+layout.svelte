<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
</script>

<svelte:head>
  <title>Fix My English!</title>
  <meta name="description" content="This is a spell checker generator." />
</svelte:head>

<div class="container mx-auto flex items-center h-screen px-10">
  <div class="h-fit w-full">
    <Header />

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

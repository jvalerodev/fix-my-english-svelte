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
    background-image: linear-gradient(
      109.6deg,
      rgba(0, 0, 0, 1) 11.2%,
      rgb(0, 0, 30) 78.9%
    );
    color: #fff;
  }
</style>

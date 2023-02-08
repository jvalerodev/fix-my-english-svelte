<script lang="ts">
  import Form from '../components/Form.svelte';
  import BoxResult from '../components/BoxResult.svelte';
  import LoadingSpinner from '../components/LoadingSpinner.svelte';
  import EnglishService from '../services/english';

  let input = '';
  let result = '';
  let isLoading = false;

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    if (!input) return;

    isLoading = true;

    try {
      result = '';
      result = await EnglishService.fixIt(input);
    } catch (error) {
      console.log(error);
    }

    isLoading = false;
  };
</script>

{#if isLoading}
  <LoadingSpinner />
{/if}

<div class="md:flex justify-between md:space-x-20">
  <Form {handleSubmit} bind:input {isLoading} />

  <BoxResult {result} />
</div>

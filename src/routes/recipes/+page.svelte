<script lang="ts">
  import { pb } from '$lib/pocketbase';
  import debounce from 'lodash/debounce';

  const perPage = 20;
  let currentPage: number = $state(1);
  let query = $state('');

  const fetchRecipes = debounce(
    async (query: string) => {
      const filter = query ? { filter: pb.filter('name ~ {:name}', { name: query }) } : {};
      return await pb.collection('recipes').getList(currentPage, perPage, filter);
    },
    200,
    { leading: true, trailing: true }
  );

  let itemPromise = $derived.by(async () => {
    const recipes = await fetchRecipes(query);
    return recipes?.items;
  });
</script>

<div class="flex flex-col gap-y-4 mb-4">
  <a href="/recipes/new" class="btn btn-secondary w-1/6">Add recipe</a>
  <form class="form-control w-full">
    <div class="flex gap-x-2 w-full">
      <input
        type="text"
        name="search"
        placeholder="Search"
        class="input input-bordered grow"
        bind:value={query}
      />
      <button class="btn btn-primary w-1/6">Search</button>
    </div>
  </form>
</div>

<div>
  {#await itemPromise}
    <div></div>
  {:then items}
    <ul class="flex flex-col gap-y-4">
      {#if items && items.length > 0}
        {#each items as item (item.id)}
          <div class="card min-w-20 bg-neutral shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{item.name}</h2>
              <p>A description of the dish</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <p>No recipes found</p>
      {/if}
    </ul>
  {:catch error}
    <p>{error.message}</p>
  {/await}
</div>

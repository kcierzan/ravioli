<script lang="ts">
  import { Set } from 'svelte/reactivity';

  const cookingSteps = new Set<string>();
  let stepCount = $derived(Array.from(cookingSteps.values()).length)

  function addCookingStep(e: MouseEvent) {
    e.preventDefault();
    cookingSteps.add(crypto.randomUUID());
  }

  function removeCookingStep(e: MouseEvent, id: string) {
    e.preventDefault();
    cookingSteps.delete(id);
  }
</script>

<div class="flex flex-col {stepCount ? 'gap-y-2' :  '' }">
  <div class="flex flex-col gap-y-2 gap-x">
    {#each cookingSteps.values() as id, index (id)}
      <div class="flex flex-row w-full gap-x-2">
        <input
          type="text"
          class="input input-bordered grow"
          id={`cookingStep-${index}`}
          name={`cookingStep-${index}`}
          placeholder={`Cooking Step ${index + 1}`}
        />
        <button class="btn btn-secondary" onclick={(e) => removeCookingStep(e, id)}
        >Remove cooking step
        </button
        >
      </div>
    {/each}
  </div>
  <button onclick={addCookingStep} class="btn btn-secondary w-full">Add a cooking step</button>
</div>

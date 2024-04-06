<script lang="ts">
  import { Set } from 'svelte/reactivity';

  const preparationSteps = new Set<string>();
  let stepCount = $derived(Array.from(preparationSteps.values()).length)

  function addPreparationStep(e: MouseEvent) {
    e.preventDefault();
    preparationSteps.add(crypto.randomUUID());
  }

  function removePreparationStep(e: MouseEvent, id: string) {
    e.preventDefault();
    preparationSteps.delete(id);
  }
</script>

<div class="flex flex-col {stepCount ? 'gap-y-2' : ''}">
  <div class="flex flex-col gap-y-2">
    {#each preparationSteps.values() as id, index (id)}
      <div class="flex flex-row w-full gap-x-2">
        <input
          type="text"
          class="input input-bordered grow"
          id={`preparationStep-${index}`}
          name={`preparationStep-${index}`}
          placeholder={`Preparation Step ${index + 1}`}
        />
        <button class="btn btn-secondary" onclick={(e) => removePreparationStep(e, id)}
        >Remove prep step
        </button
        >
      </div>
    {/each}
  </div>
  <button onclick={addPreparationStep} class="btn btn-secondary w-full">Add a prep step</button>
</div>
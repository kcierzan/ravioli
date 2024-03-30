<script lang="ts">
  import { Set } from "svelte/reactivity";

  const preparationSteps = new Set<string>();

  function addPreparationStep(e: MouseEvent) {
    e.preventDefault();
    preparationSteps.add(crypto.randomUUID());
  }

  function removePreparationStep(e: MouseEvent, id: string) {
    e.preventDefault();
    preparationSteps.delete(id);
  }
</script>

<div class="flex flex-col gap-y-2 gap-x mb-2">
  {#each preparationSteps.values() as id, index (id)}
    <input
      type="text"
      class="input input-bordered"
      id={`preparationStep-${index}`}
      name={`preparationStep-${index}`}
      placeholder={`Preparation Step ${index + 1}`}
    />
    <button class="btn btn-secondary" onclick={(e) => removePreparationStep(e, id)}>Remove prep step</button>
  {/each}
</div>
<button onclick={addPreparationStep} class="btn btn-secondary">Add a prep step</button>
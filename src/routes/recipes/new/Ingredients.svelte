<script lang="ts">
  import { Set } from "svelte/reactivity";
  import CompletionInput from "./CompletionInput.svelte";
  import type { RecordModel } from "pocketbase";

  interface IngredientsFormProps {
    units: RecordModel[];
    provisions: RecordModel[];
  }

  const { units = [], provisions = [] }: IngredientsFormProps = $props();

  const recipeIngredients = new Set<string>([crypto.randomUUID()]);

  function addIngredient(e: MouseEvent) {
    e.preventDefault();
    recipeIngredients.add(crypto.randomUUID());
  }

  function removeIngredient(e: MouseEvent, id: string) {
    e.preventDefault();
    recipeIngredients.delete(id);
  }
</script>

<div class="flex flex-col gap-y-2 gap-x mb-2">
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each recipeIngredients.values() as id, index (id)}
    <div class="flex gap-x-2">
      <CompletionInput
        name="provision"
        {index}
        placeholder="Ingredient"
        completions={provisions}
        styles="grow"
        searchKey="name"
      />
      <input
        type="number"
        name={`ingredient-amount-${index}`}
        placeholder="Amount"
        min="0"
        class="input input-bordered w-1/6"
      />
<!--      <CompletionInput-->
<!--        name={`ingredient-unit-${index}`}-->
<!--        placeholder="Unit"-->
<!--        completions={units.map((unit) => unit.name)}-->
<!--        styles="w-1/6"-->
<!--      />-->
      <button class="btn btn-secondary" onclick={(e) => removeIngredient(e, id)}
        >Remove ingredient</button
      >
    </div>
  {/each}
</div>
<button onclick={addIngredient} class="btn btn-secondary">Add an ingredient</button>

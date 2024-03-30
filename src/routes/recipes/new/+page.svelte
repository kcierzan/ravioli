<script lang="ts">
  import type { RecordModel } from "pocketbase";
  import Ingredients from "./Ingredients.svelte";
  import PreparationSteps from "./PreparationSteps.svelte";

  interface NewRecipeProps {
    data: {
      styles: RecordModel[];
      units: RecordModel[];
      provisions: RecordModel[];
    };
  }

  const { data }: NewRecipeProps = $props();
  const { styles = [], units = [], provisions = [] } = data;
</script>

<h1 class="text-3xl font-bold mb-8">Add a recipe</h1>

<form method="POST" class="card">
  <div class="flex form-control gap-y-2 mb-2">
    <input type="text" name="name" placeholder="Name" class="input input-bordered" />
    <label for="style" class="label">Style</label>
    <select id="style" name="style" class="select" multiple>
      {#each styles as style (style.id)}
        <option value={style.name}>{style.name}</option>
      {/each}
    </select>
    <div class="flex gap-x-2">
      <input
        type="number"
        name="prep-time"
        placeholder="Prep time minutes"
        class="input input-bordered"
      />
      <input
        type="number"
        name="cooking-time"
        placeholder="Cooking time minutes"
        class="input input-bordered"
      />
      <input type="number" name="serving-size" placeholder="Serves" class="input input-bordered" />
    </div>
  </div>
  <Ingredients {units} {provisions} />
  <PreparationSteps />
  <button class="btn btn-primary">Submit</button>
</form>

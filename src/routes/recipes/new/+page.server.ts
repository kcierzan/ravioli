export async function load({ locals }) {
  const { pb } = locals;

  const styles = await pb.collection('styles').getFullList();
  const units = await pb.collection('units').getFullList();
  const provisions = await pb.collection('provisions').getFullList();

  return {
    styles,
    units,
    provisions
  };
}

interface Ingredient {
  amount?: number;
  name?: string;
  unit?: string;
}

function collectPrefixedFormValues<T>(
  data: FormData,
  prefix: string,
  accumulator: Map<string, T>
): T[] {
  return Array.from(
    Array.from(data.entries())
      .reduce((acc, [key, value]) => {
        if (!key.startsWith(prefix)) return acc;

        const [, property, index] = key.split('-');

        if (acc.has(index)) {
          acc.set(index, { ...acc.get(index), [property]: value } as T);
        } else {
          acc.set(index, { [property]: value } as T);
        }
        return acc;
      }, accumulator)
      .values()
  );
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const ingredients = collectPrefixedFormValues(
      formData,
      'ingredient',
      new Map<string, Ingredient>()
    );
    const recipe = {
      name: formData.get('name'),
      styles: formData.get('style'),
      prepTime: formData.get('prep-time'),
      cookingTime: formData.get('cooking-time'),
      servingSize: formData.get('serving-size'),
      ingredients
    };
    console.log(JSON.stringify(recipe));
  }
};

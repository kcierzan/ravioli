<script lang="ts">
  import Fuse from "fuse.js";
  import type { RecordModel } from "pocketbase";
  import find from "lodash/find";
  import debounce from "lodash/debounce";

  interface CompletionInputProps {
    name: string;
    completions: RecordModel[];
    placeholder: string;
    styles?: string;
    searchKey: string;
    index: number;
  }
  const {
    completions,
    name,
    styles = '',
    placeholder,
    searchKey,
    index
  }: CompletionInputProps = $props();

  // establish a stacking context with `relative`
  const containerStyles = `${styles} relative`;

  let inputValue = $state('');
  let inputId: string | null = $state(null);
  let selectedIndex = $state(-1);
  let completionShowing = $state(false);
  let completionNodes: HTMLLIElement[] = $state([]);

  let topCompletions = $derived.by(() => {
    const fuse = new Fuse(completions, { keys: [searchKey] });
    return fuse.search(inputValue);
  });

  function handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowDown':
        if (selectedIndex < topCompletions.length - 1) {
          selectedIndex++;
        }
        break;
      case 'ArrowUp':
        if (selectedIndex > 0) {
          selectedIndex--;
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          setSelection(topCompletions[selectedIndex].item);
        }
        break;
      case 'Tab':
        if (!completionShowing) {
          break;
        }
        e.preventDefault();
          if (e.shiftKey) {
            if (selectedIndex === 0) {
              selectedIndex = topCompletions.length - 1
            } else {
              selectedIndex--
            }
          } else {
            if (selectedIndex < topCompletions.length - 1) {
              selectedIndex++
            } else {
              selectedIndex = 0
            }
          }
        break;
      case 'Escape':
        selectedIndex = -1;
        completionShowing = false;
        break;
      default:
        completionShowing = true;
        break;
    }
    // completionShowing = true;
    lookupRecordId();
    completionNodes[selectedIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function handleCompletionClick(e: MouseEvent, index: number) {
    e.preventDefault();
    setSelection(topCompletions[index].item);
  }

  function setSelection(completionItem: RecordModel) {
    inputValue = completionItem[searchKey];
    inputId = completionItem.id;
    selectedIndex = -1;
    completionShowing = false;
  }

  const lookupRecordId = debounce(() => {
    const record = find(completions, ['name', inputValue]);
    if (record) {
      inputId = record.id;
    }
  }, 200);

</script>

<div class={containerStyles}>
  <input
    type="text"
    name={`${name}-${searchKey}-${index}`}
    {placeholder}
    class="input input-bordered w-full"
    onfocusin={() => (completionShowing = true)}
    onfocusout={() => {completionShowing = false; selectedIndex = -1}}
    onkeydown={handleKeydown}
    bind:value={inputValue}
  />
  <input type="hidden" id={`${name}-id-${index}`} name={`${name}-id-${index}`} value={inputId} />
  {#if completionShowing}
    <div class="suggestion-container">
      <div class="overflow-auto max-h-40">
        <ul>
          {#each topCompletions as option, index}
            <li
              bind:this={completionNodes[index]}
              class="suggestion {index === selectedIndex ? 'highlighted' : ''}"
            >
              <button class="text-left w-full" onmousedown={(e) => handleCompletionClick(e, index)}
                >{option.item[searchKey]}</button
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .suggestion-container {
    @apply absolute top-full left-0 z-50;
    @apply overflow-hidden;
    @apply w-full;
    @apply list-none;
    @apply bg-neutral;
    @apply rounded-b-md;
  }

  .suggestion {
    padding: 0.5rem;
    cursor: pointer;
  }

  .suggestion:hover {
    @apply bg-neutral-500;
  }

  .highlighted {
    @apply bg-neutral-500;
  }
</style>

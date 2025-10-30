<script>
    const { parentName, children } = $props();
</script>

<h2>{parentName}</h2>
{#each children as child}
    <h3>{child.name}: {child.familySheep}</h3>
{/each}
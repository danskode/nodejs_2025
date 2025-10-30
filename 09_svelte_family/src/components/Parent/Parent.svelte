<script>
    import Child from "../Child/Child.svelte";

    const { parentName, children } = $props();

    const loveHistory = $state([
        { 
            name: "self-love",
            love: "💞"
    }]);

    function handleShowLove(childsName) {
        loveHistory.push({
            name: childsName,
            love: "💞",
        });
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪", "🍪", "🍪","🍪", "🍪", "🍪", "🍪"]);

    function handleCookieJarEat() {
        cookieJar.pop();

        if(cookieJar.length === 0){
            cookieJar = ["🍪", "🍪", "🍪", "🍪", "🍪", "🍪","🍪", "🍪", "🍪", "🍪"]
        }
    }

    function handleCookieJarFill() {
        cookieJar.push("🍪");
    }

</script>

<h2>{parentName}</h2>
<button onclick={handleCookieJarFill} >Fill the cookie jar</button>

{#each loveHistory as love}
    <span>{love.name}: {love.love}</span>
{/each}

{#each cookieJar as cookie }
    <span>{cookie}</span>
    
{/each}

<!-- <button onclick={handleShowLove}>Show love</button> -->

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onCookieJarEat={handleCookieJarEat}/>
{/each}

<style>
    h2 {
        background-color: brown;
    }
</style>
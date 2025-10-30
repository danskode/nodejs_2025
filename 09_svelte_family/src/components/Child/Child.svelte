<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";
    const { name, familySheep, isGirl, onShowLove, onCookieJarEat } = $props();

    let fridgeMessageInput = $state("Test some default input ...");

    function handleWriteFridgeMessage() {
        // fridgeMessages.set([...$fridgeMessages, fridgeMessageInput]);

        fridgeMessages.update((fridgeMessagesStoreValue) => {
            fridgeMessagesStoreValue.push(fridgeMessageInput);

            return fridgeMessagesStoreValue;
        });
        fridgeMessageInput = "";
    }

</script>


<div
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    {#if isGirl}
        <h3>{name} is a girl</h3>
    {:else}
        <h3>{name} is a boy</h3>
   {/if}
</div>

<button onclick={() => onShowLove(name)} >Show your parent some love</button>
<button onclick={onCookieJarEat} >Have a cookie</button>

<br>
<br>

<input bind:value={fridgeMessageInput}>
<button onclick={handleWriteFridgeMessage}>Write a fridge message</button>

<style>
    .black-sheep h3 {
        color: black;
    }
    .grey-sheep h3 {
        color: lightgray;
    }
    .not-a-sheep h3 {
        color: red;
    }
    .is-girl h3 {
        text-decoration: underline;
    }
    .is-boy {
        background-color: blue;
    }
</style>
    
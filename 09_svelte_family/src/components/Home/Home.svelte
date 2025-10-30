
<script>
    import { fridgeMessages } from "../../stores/fridgeStore.js";

</script>

<!-- slot svarer til children i React ... -->
<slot></slot>


{#each $fridgeMessages as fridgeMessage }
    <p>{fridgeMessage}</p>
{/each}


<h2 id="welcome-mat">Velkommen til måtten</h2>

<style>
    #welcome-mat {
        color: white;
        background-color: black;
        padding: 2em;
        border-radius: 0 0 2em 2em;
    }
</style>
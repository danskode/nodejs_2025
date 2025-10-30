import { writable } from "svelte/store";

function fridgeMessagesStore() {
    const { subscribe, update, set } = writable(["Write a message on the fridge"]);

    return {
        subscribe,
        update,
        set,
        wipe: () => set(["Write a message on the fridge"])
    }
}

export const fridgeMessages = fridgeMessagesStore();

// export const fridgeMessages = writable(["Write a message on the fridge"]);
<template>
    <div>Vue counter: {{ count }}</div>
    <button @click="add">add</button>
</template>

<script>
import { ref } from "vue";

export default {
    name: "Counter",
    setup() {
        const count = ref(0);
        const add = () => {
            const pre = count.value;
            count.value = pre + 1;
        };
        return { count, add };
    },
};
</script>

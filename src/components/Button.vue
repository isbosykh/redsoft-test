<template>
    <button @click="$emit('click', $event)">
        <span>{{ title }}</span>
    </button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    button {
        height: 60px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 22px 30px;
        border-radius: 999em;
        background-color: $red-btn;

        span {
            font-size: 16px;
        }
    }
</style>
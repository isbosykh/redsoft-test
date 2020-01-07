<template>
    <input v-model="_model" :placeholder="placeholder" :type="type || 'text'">
</template>

<script>
    export default {
        name: "Input",
        props: {
            placeholder: String,
            type: String
        },
        computed: {
            _model: {
                get: function() {
                    return this.model;
                },
                set: function(value) {
                    if (this.$parent.$el.tagName === "FORM") {
                        this.$parent.email = value
                    } else this.$parent.email = value
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    input {
        padding: 20px;
        border-radius: 999em;
        border: 1px solid $blue-dark;
        background-color: transparent;
    }
</style>
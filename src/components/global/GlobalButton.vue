<script setup lang="ts">
defineProps<{
    type: 'dismissButton'
    classes?: string
}>();

</script>

<template>
    <button :class="type + ' ' + classes">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.dismissButton {
    padding: 8px;
    cursor: pointer;
    font-size: 1.5rem;
    border-color: red;
    font-weight: 600;

    &:hover {
        background-color: lightpink;
    }
}
</style>
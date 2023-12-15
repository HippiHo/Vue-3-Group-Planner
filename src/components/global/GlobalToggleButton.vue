<script setup lang="ts">

defineProps<{
    isAddButton: boolean
    classes?: string
}>();

</script>

<template>
    <button :class="`togglebutton ${classes || ''} ${isAddButton ? 'greenButton' : 'redButton'}`">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.toggleButton {
    padding: 8px;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;

    &:hover {
        background-color: lightpink;
    }
}

.greenButton {
    border-color: green;
    background-color: greenyellow;
}

.redButton {
    border-color: red;
    background-color: orangered;
}
</style>
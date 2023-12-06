<script setup lang="ts">
const props = defineProps({
    as: String,
    classes: { type: String, required: false},
})
const Component: any = props.as
</script>

<template>
    <Component :class="classes ? 'container' + ' ' + classes : 'container'">
        <slot />
    </Component>
</template>

<style lang="scss" scoped>
.container {
    padding: 8px 16px;
    border: black 1px solid;
}
</style>
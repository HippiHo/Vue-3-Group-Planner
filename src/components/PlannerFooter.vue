<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer>
        <nav>
            <RouterLink to="/">Refresh and back to the start</RouterLink>
            <span>|</span>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #f1f1f1;
}
</style>
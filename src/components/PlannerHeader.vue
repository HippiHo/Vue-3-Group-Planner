<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <div class="branding">
                <img src="../assets/logo.svg" alt="Vue Logo" height="40px">
                <h1>Group Planner</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/" class="homeRoute">Home</RouterLink>
                <RouterLink to="/about" class="aboutRoute">About</RouterLink>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #f1f1f1;

    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                max-width: 50px;
            }

            h1 {
                font-size: 24px;
            }
        }

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 12px;
            list-style: none;

            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
}
</style>
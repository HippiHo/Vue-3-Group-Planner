<script setup lang="ts">
import { RouterView } from 'vue-router'
import PlannerHeader from './components/PlannerHeader.vue'
import PlannerFooter from './components/PlannerFooter.vue'
</script>

<template>
  <PlannerHeader />
  <RouterView />
  <PlannerFooter />
</template>

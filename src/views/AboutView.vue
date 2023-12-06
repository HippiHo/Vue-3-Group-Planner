<template>
  <main class="about">
    <article>
      <h1>About this Planner</h1>
      <p>This planner shows you 12 monthes. Click on the days you want to exclude and see which days are left for
        everybody.</p>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.about {
  background-color: lightgreen;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  article {
    margin: 20px;

    h1 {
      margin-bottom: 16px;
    }
  }
}
</style>

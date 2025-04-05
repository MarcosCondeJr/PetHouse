<script setup>
  import Navbar from './components/Navbar.vue';
  import Rodape from './components/Rodape.vue';
</script>


<template>
 <div class="min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-grow p-4">
      <RouterView />
    </main>

    <Rodape />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

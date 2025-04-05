<template>
  <header class="p-3 shadow-md w-full">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
      <h1 class="text-blue-500 font-bold text-xl">PetHouse</h1>

        <nav class="flex gap-8 justify-center">
        <RouterLink
          to="/"
          :class="[
            $route.path === '/' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-stone-500 hover:text-blue-600'
          ]"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/pets"
          :class="[
            $route.path === '/pets' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-stone-500 hover:text-blue-600'
          ]"
        >
          Pets
        </RouterLink>

        <RouterLink
          to="/vacinas"
          :class="[
            $route.path === '/vacinas' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-stone-500 hover:text-blue-600'
          ]"
        >
          Vacinas
        </RouterLink>

        <RouterLink
          to="/lembretes"
          :class="[
            $route.path === '/lembretes' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-stone-500 hover:text-blue-600'
          ]"
        >
          Lembretes
        </RouterLink>
      </nav>

      <div class="flex -space-x-2 overflow-hidden">
        <img class="inline-block size-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      </div>
    </div>
  </header>
</template>


<script setup>
    import { RouterLink } from 'vue-router';
</script>
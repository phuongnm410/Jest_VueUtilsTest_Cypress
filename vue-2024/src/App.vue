<template>
  <div>
    <header class="flex flex-row justify-between p-3 shadow-xl">
      <div class="w-[50px] ">
        <img src="./assets/logo.svg" alt="">
      </div>
      <nav class="justify-between flex flex-row gap-3">
        <RouterLink to="/" class="text-sm font-bold text-white bg-green-700 border px-5 rounded flex items-center">
          Home
        </RouterLink>

        <RouterLink to="/create" class="text-sm font-bold text-black bg-gray-300 border px-5 rounded-sm flex items-center gap-2">
          Create <i class="pi pi-plus"></i>
        </RouterLink>
      </nav>
    </header>

    <main class="text-black w-100vw h-100">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

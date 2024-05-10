<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/attribute">Attribute</RouterLink>
        <RouterLink to="/conditional">Conditional</RouterLink>
        <RouterLink to="/list">List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
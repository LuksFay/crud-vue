<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Note/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'Home',
  components: {
    Note
  }
}
</script>

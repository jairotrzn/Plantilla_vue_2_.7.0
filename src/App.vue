<template>

  <v-app>
          <router-view/>
  </v-app>
</template>

<script>
//import Login from '@/views/Login.vue'
import HomeView from '@/views/HomeView.vue' 
export default {
  name: 'App',

  data: () => ({
    // propiedades de data
  }),
  
  components: {
   // Login,
    HomeView
  }
}
</script>

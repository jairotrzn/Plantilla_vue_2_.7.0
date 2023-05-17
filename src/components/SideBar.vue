<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      
  <v-list-item prepend-icon="mdi-home" title="Home" @click="goToHome"></v-list-item>   
  <v-list-item prepend-icon="mdi-account-multiple" title="Table" @click="goToTable"></v-list-item>
  <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({}),
    methods: {
    goToHome() {
      this.$router.push('/home');
    },
    goToTable(){
      this.$router.push('/Table')
    }
  }
};
</script>
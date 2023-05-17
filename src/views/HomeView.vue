<template>
<TopBar/>
  <SideBar/>
    
      <v-container>
      <v-row>
        <v-col cols="12" sm="9">
          <v-row>
            <v-col cols="12" sm="12">
              <h1>Formulario</h1>
            </v-col>
            <v-col cols="12" sm="11">
              <Tarjeta/>
              <Formulario/>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3">
         <InformationCards/>
        </v-col>
      </v-row>
    </v-container>
  
</template>

<script>

import Tarjeta from '@/components/Tarjeta.vue/'
import Formulario from '@/components/Formulario.vue'
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
import InformationCards from '@/components/InformationCards.vue'
import TableCrud from '@/components/TableCrud.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Formulario,
    SideBar,
    TopBar,
    InformationCards,
    TableCrud,
    Tarjeta
  }
}
</script>
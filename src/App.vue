<script>
import { RouterLink, RouterView } from 'vue-router'
import { useNameStore } from './stores/name';
import { mapActions } from 'pinia';



  export default {
    components: {

},
    methods: {
      ...mapActions(useNameStore, {
        loadData: 'loadData'
      })
    },
    mounted() {
      this.loadData()
    }
  }

</script>

<template>
  <div class="container">
    <h1>Configurado Por Defecto</h1>
    <RouterView />
  </div>
</template>
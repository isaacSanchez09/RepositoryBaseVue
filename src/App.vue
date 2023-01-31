<script>
import { RouterLink, RouterView } from 'vue-router'
import { useDataStore } from './stores/data';
import { mapActions } from 'pinia';
import AppMenu from './components/AppMenu.vue'

  export default {
    components: {
      AppMenu
    },
    methods: {
      ...mapActions(useDataStore, {
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
    <AppMenu></AppMenu>
    <RouterView />
  </div>
</template>
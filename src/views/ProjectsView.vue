<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
    name: 'ProjectsView',
    data() {
      return {
        message: 'Hello '
      }
    },
    setup(){
        const user = reactive({
            nama: "arian",
            hoby: "main game"
        })

        setTimeout(()=>{
            user.nama = "arian saputra"
        }, 2000)

        return {user}
    }
}
</script>

<style>

</style>
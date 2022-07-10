<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Arian </span>
        <span>Daily Routine</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain>
        <span>Sign Out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer 
      app 
      v-model="drawer" 
      absolute
      bottom
      temporary
      hide-overlay>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Arian
          </v-list-item-title>
          <v-list-item-subtitle>
            Daily Routine
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          route :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import endpoints from '../router/endpoints'
export default {
  data(){
    return {
      drawer: false,
      items: endpoints,
    }
  }
}
</script>
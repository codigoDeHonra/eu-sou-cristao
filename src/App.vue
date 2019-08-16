<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Eu sou Cristão</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn text to="/">Cadastro</v-btn>
          <v-btn text to="/lista" >Lista</v-btn>
          <v-btn text to="/sobre">Sobre</v-btn>
          <v-btn text to="/privacidade">Privacidade</v-btn>
          <v-btn text to="/como-ajudar">Como ajudar?</v-btn>
          <v-btn text to="/perguntas">Perguntas?</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
        <v-fade-transition mode="out-in">
            <router-view></router-view>
        </v-fade-transition>
    </v-content>
  </v-app>
</template>
<script>
export default {
    name: 'App',
    data: () => ({
    }),
    created () {
        this.$vuetify.theme.dark = true
    },
};
</script>

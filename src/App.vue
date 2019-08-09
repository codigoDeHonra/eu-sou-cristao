<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Eu sou Cristão</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
          <v-btn text>Cadastro</v-btn>
          <v-btn text>Lista</v-btn>
          <v-btn text>Sobre</v-btn>
          <v-btn text>Privaciade</v-btn>
          <v-btn text>Como ajudar?</v-btn>
          <v-btn text>Perguntas?</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

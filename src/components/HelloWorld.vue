<template>
  <v-container>
    <v-layout
        align-center
        justify-center
    >
      <v-flex md4 xs12>
          <v-text-field
              label="Nome"
              outlined
              ></v-text-field>
          <v-text-field
              label="E-mail"
              outlined
              ></v-text-field>
          <v-checkbox
              v-model="checkbox1"
              label="Eu aceito"
          >
          </v-checkbox>
          <v-btn>Save</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({ }),
    created () {
        this.$vuetify.theme.dark = true
    },
};
</script>

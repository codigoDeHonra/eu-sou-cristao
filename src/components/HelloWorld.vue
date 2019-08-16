<template>
  <v-container fluid>
    <v-row
        align="center"
        justify="center"
    >
      <v-col cols="4">
          <iframe width="560" 
              height="315" 
              src="https://www.youtube.com/embed/1" 
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
      </v-col>
      <v-col cols="4">
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
      </v-col>

    </v-row>
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

<template>
  <v-container fluid>
    <v-row
      v-if="!confirmed"
      align="center"
      justify="center"
    >
      <v-col cols="4">
          <iframe width="400"
              height="315"
              src="https://www.youtube.com/embed/1"
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
          </iframe>
      </v-col>
      <v-col cols="4">
          <v-text-field
              v-model="discipulo.name"
              label="Nome"
              outlined
              ></v-text-field>
          <v-text-field
              v-model="discipulo.email"
              label="E-mail"
              outlined
              ></v-text-field>
          <v-checkbox
              v-model="discipulo.accept"
              label="Eu aceito"
          >
          </v-checkbox>
          <v-btn
            @click="save()"
            >Salvar</v-btn>
      </v-col>

    </v-row>
    <v-row v-else>
      <v-col cols="4">
        Cadastrado
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Register',
  data: () => (
    {
      confirmed: false,
      discipulo: {
        name:'',
        email:'',
        accept: false,
      }
    }
  ),
    created () {
        this.$vuetify.theme.dark = true
    },
  computed: {
    ...mapGetters({
      usuarioGetter: 'usuario/usuarioGetter',
    }),
  },
  methods: {
    ...mapActions({
      insertDiscipuloAction: 'discipulo/insertDiscipuloAction',
    }),
    save(){
      this.insertDiscipuloAction(this.discipulo)
      this.confirmed = true
    }
  },
};
</script>

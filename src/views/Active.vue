<template>
  <v-container fluid>
    <v-row
      v-if="!confirmed"
      align="center"
      justify="center"
    >
      <v-col cols="4">
        teste
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

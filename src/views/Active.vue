<template>
  <v-container fluid>
    <v-row
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
  name: 'Active',
  data: () => (
    {
    }
  ),
  created () {
    this.activeDiscipuloAction(this.$route.params.code)
  },
  computed: {
    ...mapGetters({
      usuarioGetter: 'usuario/usuarioGetter',
    }),
  },
  methods: {
    ...mapActions({
      insertDiscipuloAction: 'discipulo/insertDiscipuloAction',
      activeDiscipuloAction: 'discipulo/activeDiscipuloAction'
    }),
  },
};
</script>

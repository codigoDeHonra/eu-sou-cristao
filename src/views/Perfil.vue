<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <v-card
          max-width="344"
          class="mx-auto"
          >
          <v-card-title>{{discipuloGetter.name}}</v-card-title>
          <v-card-text>
            <p>{{discipuloGetter.email}}</p>
            <p>Cristão</p>
          </v-card-text>
        <v-card-actions>
          <v-btn text>Compartilhar</v-btn>
        </v-card-actions>
      </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Perfil',
  data: () => (
    { }
  ),
  created () {
    this.syncDiscipuloAction(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      discipuloGetter: 'discipulo/discipuloGetter',
    }),
  },
  methods: {
    ...mapActions({
      syncDiscipuloAction: 'discipulo/syncDiscipuloAction',
    }),
  },
};
</script>

<template>
  <v-container fluid>
    <v-row
        align="center"
        justify="center"
    >
      <v-col cols="12">
        <v-text-field
          v-model="search"
          append-icon="fas fa-search"
          label="Pesquisa"
          single-line
          hide-details
          >
        </v-text-field>
          <v-data-table
              :headers="headers"
              :items="discipulosGetter"
              :sort-by="['calories', 'fat']"
              :sort-desc="[false, true]"
              class="elevation-1"
              :search="search"
          >
          </v-data-table>
      </v-col>
      </v-row>
  </v-container >
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'List',
  data() {
    return {
      search:'',
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'e-mail', value: 'email' },
        { text: 'Ações', value: null, sortable: false},
      ]
    }
  },
  created(){
    this.syncDiscipulosAction()
  },
  methods: {
    ...mapActions({
      syncDiscipulosAction: 'discipulo/syncDiscipulosAction',
    }),
  },
  computed: {
    ...mapGetters({
      discipulosGetter: 'discipulo/discipulosGetter',
    }),
  },
}
</script>

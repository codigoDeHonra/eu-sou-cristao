<template>
  <v-container fluid>
    <v-row
        align="center"
        justify="center"
    >
      <v-col cols="12">
          <v-data-table
              :headers="headers"
              :items="desserts"
              :sort-by="['calories', 'fat']"
              :sort-desc="[false, true]"
              class="elevation-1"
          ></v-data-table>
      </v-col>
      </v-row>
  </v-container >
</template>
<script>
export default {
    name: 'List',
    data() {
        return {
            headers: [
                {
                    text: 'Nome',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                { text: 'e-mail', value: 'calories' },
                { text: 'Ações', value: 'fat', sortable: false},
            ],
            desserts: [
                {
                    name: 'Eclair',
                    calories: 300,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    calories: 300,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    calories: 400,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
            ]
        }
    }
}
</script>

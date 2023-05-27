<template>
    <v-col
        cols="12"
        md="4"
    >
      <v-select
          v-model="filters.country"
          :items="filterOptions.country"
          item-title="value"
          clearable
          return-object
          label="Filter by country"
      ></v-select>

      <v-select
          v-model="filters.score"
          :items="filterOptions.score"
          item-title="text"
          clearable
          return-object
          label="Filter by score"
      ></v-select>
    </v-col>
</template>

<script>
import { ref } from 'vue'

import { useUsersStore } from '@/store/users'
import { storeToRefs } from 'pinia'

export default {
  name: 'Filters',
  setup () {
    const filterOptions = ref({
      country: [{ value: 'Russia', operator: '=' }, { value: 'USA', operator: '=' }],
      score: [{ text: '> 20', value: 20, operator: '>' }, { text: '< 10', value: 10, operator: '<' }]
    })

    const users = ref([])

    const store = useUsersStore()

    const { filters } = storeToRefs(store)

    return { filters, filterOptions, users, store }
  },

  watch: {
    filters: {
      handler: async function () {
        await this.store.fetchUsers()
      },
      deep: true
    }
  }
}
</script>

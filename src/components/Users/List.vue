<template>
  <v-col
      cols="12"
      md="4"
  >
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list lines="three" class="overflow-hidden">
        <transition name="fade">
        <v-progress-circular class="spinner" color="blue" v-if="isLoading" indeterminate />
        </transition>

        <v-list-subheader >
            List
        </v-list-subheader>

        <transition-group name="list" tag="p">
        <template v-for="item in items" :key="item.id">
          <v-divider />

          <ListItem :item="item"/>
        </template>
        </transition-group>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { useUsersStore } from '@/store/users'
import { storeToRefs } from 'pinia'
import ListItem from '@/components/Users/ListItem'

export default {
  name: 'List',
  components: { ListItem },
  setup () {
    const store = useUsersStore()

    const { items, isLoading } = storeToRefs(store)

    return { items, isLoading }
  }
}
</script>

<style scoped>
.spinner {
  position: absolute !important;
  right: 12px;
  top: 12px;
}
</style>

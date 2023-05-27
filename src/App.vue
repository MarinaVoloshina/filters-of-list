<template>
  <v-app>
    <v-main>
      <UserView />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <AppFooter />
    </v-footer>
  </v-app>
</template>

<script>
import AppFooter from './components/Footer'
import UserView from '@/views/UserView'

import { useUsersStore } from '@/store/users'

export default {
  name: 'App',

  components: {
    UserView,
    AppFooter
  },

  computed: {
    localAttrs () {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    }
  },

  setup () {
    const store = useUsersStore()

    return { store }
  },

  async created () {
    await this.store.fetchUsers()
  }
}
</script>

<template>
<v-container>
  <v-row
      align="center"
      justify="center"
      class="my-4"
  >
    <v-col cols="12">
      <v-img
          :src="require('../assets/images/logo.svg')"
          class="my-3"
          contain
          height="200"
      />
    </v-col>
  </v-row>

    <v-row
      align="center"
      justify="center"
      class="ma-4 centered">
    <Filters />

    <List />
</v-row>

</v-container>
</template>

<script>
import Filters from '@/components/Users/Filters'
import List from '@/components/Users/List'
export default {
  name: 'UserView',
  components: { List, Filters }
}
</script>

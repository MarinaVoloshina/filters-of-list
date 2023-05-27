<template>
  <v-card
      flat
      rounded="0"
      width="100%"
      class="lighten-1 text-center"
      color="red lighten-1"
  >
    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AppFooter',

  data: () => ({})
}
</script>

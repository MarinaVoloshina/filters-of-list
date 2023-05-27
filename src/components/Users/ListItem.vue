<template>
  <v-list-item
  >
    <template #prepend>
      <v-menu>
        <template v-slot:activator="{ props }">
      <v-avatar class="avatar" v-bind="props" :image="item.avatar" />
        </template>

        <v-card class="mt-2" elevation="3">
          <v-card-text class="pa-2">
          {{item.address}}
          </v-card-text>
        </v-card>
      </v-menu>
    </template>

    <v-list-item-title v-html="item.title" />

    <v-list-item-subtitle v-html="item.subtitle" />
  </v-list-item>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
.avatar {
  cursor: pointer;
}
</style>

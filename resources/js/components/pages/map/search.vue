<template>
  <div>
    <div class="_search">
      <v-text-field
            label="Search"
            placeholder="Placeholder"
            solo
              prepend-inner-icon="mdi-map-marker"
          ></v-text-field>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap'
}
</script>

<style scoped>
._search {
  position: relative;
  z-index: 99999;
}
</style>
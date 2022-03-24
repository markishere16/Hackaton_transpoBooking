<template>
  <div>
    <div>
        <Search/>
        <Map/>

        {map}
    </div>
    <br>
  </div>
</template>

<script>

import Search from './map/search'
import Map from './map/map'


export default {
  name: 'GoogleMap',
  components: {
    Search,
    Map
  }
}
</script>
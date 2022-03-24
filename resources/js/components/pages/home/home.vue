<template>
    <div>
      <driverHome :get_CurrentUser="get_CurrentUser" v-if="get_CurrentUser.user_type == 'driver'"></driverHome>
      <passengerHome :get_CurrentUser="get_CurrentUser" v-if="get_CurrentUser.user_type == 'passenger'"></passengerHome>
    </div>
</template>
<script>
import driverHome from './driverHome'
import passengerHome from './passengerHome'
import {mapGetters} from "vuex";
export default {
    components:{
        driverHome,
        passengerHome
    },
    computed: mapGetters(["get_CurrentUser"]),    
}
</script>
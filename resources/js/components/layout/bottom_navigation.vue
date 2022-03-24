<template>
    <div>
        <v-bottom-navigation color="primary"   elevation="0" grow app flat v-model="value">
            <v-btn :to="{name: 'vehiclelist'}" value="home">
               <!--  <span>Home</span> -->
                <v-icon>mdi-map-marker-distance</v-icon>
            </v-btn>

            <v-btn value="booking">
               <!--  <span>Booking</span> -->
                <v-icon>mdi-map-marker-multiple</v-icon>
            </v-btn>
            <!-- <div>
                  
            </div> -->

              <v-btn :to="{name: 'Home'}" style="border-radius: 50px !important" rounded  color="primary" value="ticket">
               <!--  <span>Nearby</span> -->
                <v-icon large color="white" >mdi-home</v-icon>
            </v-btn>
        
             <v-btn  value="nearby">
                <!-- <span>Nearby</span> -->
                <v-icon>mdi-message</v-icon>
            </v-btn>
             <v-btn :to="{name: 'profile'}"  value="nearby">
               <!--  <span>Nearby</span> -->
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value: 'home'
        }
    }
}
</script>
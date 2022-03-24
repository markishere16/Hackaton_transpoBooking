<template>
    <div>
        <v-bottom-navigation elevation="0" grow app flat v-model="value">
            <v-btn value="home">
               <!--  <span>Home</span> -->
                <v-icon>mdi-map-marker-distance</v-icon>
            </v-btn>

            <v-btn value="booking">
               <!--  <span>Booking</span> -->
                <v-icon>mdi-map-marker-multiple</v-icon>
            </v-btn>
            <!-- <div>
                  
            </div> -->

              <v-btn  style="border-radius: 50px !important" rounded  color="primary" value="ticket">
               <!--  <span>Nearby</span> -->
                <v-icon color="white" >mdi-ticket</v-icon>
            </v-btn>
        
             <v-btn  value="nearby">
                <!-- <span>Nearby</span> -->
                <v-icon>mdi-message</v-icon>
            </v-btn>
             <v-btn value="nearby">
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
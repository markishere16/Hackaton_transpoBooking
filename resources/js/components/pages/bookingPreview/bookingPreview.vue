<template>
    <div>
         <v-app-bar style="background-color:white"   app  flat >
           
            <v-btn @click="$router.push({name: 'Home'})" color="primary" icon>
                <v-icon large>mdi-arrow-left</v-icon>
            </v-btn>
             <v-spacer></v-spacer>
        </v-app-bar>

    
            <v-row justify="center">
                <v-col class="text-center" cols="12" md="7">
                    <div>
                        <v-icon style="font-size:6rem" large color="blue">mdi-rickshaw-electric</v-icon>
                    </div>
                    <div>
                        <h3>Booking Details</h3>
                    </div>
                </v-col>
            </v-row>
           <!--  <div>
                Name: Juan Dela Cruz
            </div> -->
    
    </div>
</template>
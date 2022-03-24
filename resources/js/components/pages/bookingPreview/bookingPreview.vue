<template>
    <div>
         <v-app-bar style="background-color:white"   app  flat >
           
            <v-btn @click="$router.push({name: 'Home'})" color="primary" icon>
                <v-icon >mdi-arrow-left</v-icon>
            </v-btn>
             <v-spacer></v-spacer>
        </v-app-bar>

    
            <v-row justify="center">
                <v-col class="text-center" cols="12" md="7">
                    <div>
                        <v-avatar size="150">
                             <v-img src="https://ih1.redbubble.net/image.1723920174.8467/st,small,507x507-pad,600x600,f8f8f8.jpg"></v-img>
                        </v-avatar>
                    </div>
                    <div>
                        <h3>Booking Details</h3>
                    </div>
                </v-col>

                <v-col  cols="12" md="7">
                    <v-row>
                        <v-col cols="4">
                            Name:
                        </v-col>
                        <v-col cols="8">
                            Juan Tamad
                        </v-col>

                         <v-col cols="4">
                           Pick Up Location:
                        </v-col>
                        <v-col cols="8">
                            P3, Alicia, Isa
                        </v-col>

                         <v-col cols="4">
                           Destination:
                        </v-col>
                        <v-col cols="8">
                            Zone 3, Manila, Ph
                        </v-col>
                    </v-row>


                    <div>
                        <v-divider class="mb-2"></v-divider >
                        <span class="font-weight-medium">Description: <br>
                            Dito lang po sa tapat ng langit at lupa at may puno sa tabi ko na may dahon na green.
                        </span>
                    </div>
                   
                </v-col>

                 <v-col  cols="12" md="7">
                     <v-btn class="pt-6 pb-6" rounded color="primary" block>Accept Booking</v-btn>
                </v-col>
            </v-row>
           <!--  <div>
                Name: Juan Dela Cruz
            </div> -->
    
    </div>
</template>
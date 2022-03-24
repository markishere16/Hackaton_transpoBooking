<template>
    <div>
        <!--  <v-app-bar app color="transparent" flat>
            <v-btn color="blue" icon>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
            </v-btn>
        </v-app-bar> -->

<!-- {{from_lat}}

{{from_long}}
 -->



        <v-row justify="center">
            <v-col cols="12" md="4">
                <v-card class="pa-4" color="primary">
                    <div class="pt-2 pb-2 pl-2 pr-2">
                        <v-text-field hide-details rounded solo  value="FL. D Hall"></v-text-field>
                    </div>
                    <div class="px-2 py-2">
                        <v-text-field hide-details rounded solo :dense="true" value="Cauyan, Isa"></v-text-field>
                    </div>
                </v-card>

                <v-card elevation="1" class="mx-auto mt-3" outlined>
                    <v-list class="pa-0">
                        <v-list-item>
                            <v-list-item-content>
                                <div>
                                    <span>
                                        <v-icon small>mdi-map-marker-distance</v-icon> 3km <br>
                                        <v-icon small>mdi-map-marker-distance</v-icon> Est. time 20mins
                                    </span>
                                </div>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div style="background-color:#FF9800;border-radius:10px" class="pa-4">
                                    <span  class="font-weight-bold white--text">
                                        P100
                                    </span>
                                </div>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>

                <div class="mx-auto mt-5 pl-1 pr-1 mb-1" elevation="0">
                    <v-row>
                        <v-col class="text-center" v-for="(item, index) in list" :key="index" cols="3">
                            <v-btn class="pt-8 pb-8 pl-2 pr-2" dark color="primary" >
                                <v-icon dark>{{item}}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>

                <v-container style="height:20px !important" class=" mx-auto" fluid>
                    <v-row>


                        <v-list>
                            <v-card v-for="(driver,index) in available_drivers" :key="index" class="my-1">
                                <v-list-item >
                                    <v-list-item-avatar>
                                        <v-icon>mdi-rickshaw-electric</v-icon>
                                    </v-list-item-avatar>

                                    <v-list-item-content>

                                        <v-list-item-title>{{driver.last_name}} , {{driver.first_name}}
                                        </v-list-item-title>
                                        <v-list-item-subtitle>Contact #: {{driver.contact_no}}</v-list-item-subtitle>

                                    </v-list-item-content>
                                    <v-list-item-action>

                                        <v-btn color="primary" @click="BookNowPageHandler(driver)">Book</v-btn>
                                            


                                    </v-list-item-action>
                                </v-list-item>
                            </v-card>

                        </v-list>






                    </v-row>
                </v-container>

            </v-col>
        </v-row>

    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                list: [
                    'mdi-rickshaw-electric',

                    'mdi-motorbike',
                    'mdi-van-passenger',
                    'mdi-bus',

                ],
                book_data: {},
                available_drivers: [],
                passenger_current_location: null,
                destination: null,
                booked_driver_id: null,

                from_lat: 0,
                from_long: 0,
            }

        },
        methods: {
            locatorButtonPressed() {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.from_lat = position.coords.latitude;
                        this.from_long = position.coords.longitude;
                    },
                    error=>{
                        console.log('Error Getting the location');
                    }
                )
            },


            getAvailableDriversNearby() {
                axios.get('/api/drivers/available')
                    .then((res) => {
                        this.available_drivers = res.data
                    })
            },
            BookNowPageHandler(driver_id) {
            this.$router.push({name: 'passenger-bookingPreview', params:{id: driver_id}})
            },
        },
        mounted() {
            this.getAvailableDriversNearby();
        }
    }

</script>

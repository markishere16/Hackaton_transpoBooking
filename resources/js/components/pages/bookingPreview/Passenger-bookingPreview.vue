<template>
    <div>
        <v-app-bar style="background-color:white" app flat>

            <v-btn @click="$router.push({name: 'Home'})" color="primary" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-app-bar>


        <v-row justify="center">
            <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-avatar size="150">
                        <v-img
                            src="https://ih1.redbubble.net/image.1723920174.8467/st,small,507x507-pad,600x600,f8f8f8.jpg">
                        </v-img>
                    </v-avatar>
                </div>
                <div>
                    <h3>Booking Details</h3>
                </div>
            </v-col>

            <v-col cols="12" md="7">

                
                <v-row>
                    <v-col cols="4">
                       Driver Name:
                    </v-col>
                    <v-col cols="8">
                      {Driver_name}
                    </v-col>

                    <v-col cols="4">
                        Current Location: 
                    </v-col>
                    <v-col cols="8">
                       {current_location}
                    </v-col>

                    <v-col cols="4">
                        Destination:
                    </v-col>
                    <v-col cols="8">
                        {destination}
                    </v-col>
                </v-row>


                <div>
                    <v-divider class="mb-2"></v-divider>
                    <v-textarea outlined name="input-7-4" v-model="description" label="Description"
                        value="">
                    </v-textarea>
                </div>

            </v-col>

            <v-col cols="12" md="7">
                <v-btn class="pt-6 pb-6" v-if="isBooked == false" @click="BookNowHandler()" rounded color="primary" block>Book Now</v-btn>


            <v-btn class="pt-6 pb-6" v-if="isBooked == true" rounded color="primary" block>Cancel Booking</v-btn>
            </v-col>
        </v-row>
        <!--  <div>
                Name: Juan Dela Cruz
            </div> -->

    </div>
</template>


<script>
export default {
    // props: ['driver_id'],
    data() {
        return {
            isBooked: false,
            description: '',
            book_data: {},

        }
    },
    methods: {
       BookNowHandler() {
                this.book_data.from_location = '16.9339192,121.7712564';
                this.book_data.to_location = '16.9339192,121.7712564';
                this.book_data.driver_id = this.$route.params.id;
                this.book_data.description = this.description;
                
                axios.post('/api/booking/add',  this.book_data)
                .then((res)=>{
                    alert(res.data);
                })
            },
    }
}
</script>

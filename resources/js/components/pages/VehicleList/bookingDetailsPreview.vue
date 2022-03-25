<template>
   <div>
       <!--  <v-app-bar style="background-color:white" app flat>

            <v-btn @click="$emit('close')" color="primary" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
        </v-app-bar> -->


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
                      {{details.name}}
                    </v-col>

                    <v-col cols="4">
                        Current Location: 
                    </v-col>
                    <v-col cols="8">
                       {{details.from}}
                    </v-col>

                    <v-col cols="4">
                        Destination:
                    </v-col>
                    <v-col cols="8">
                        {{details.to}}
                    </v-col>
                </v-row>


                <div>
                    <v-divider class="mb-2"></v-divider>
                    <v-textarea hide-details outlined name="input-7-4" v-model="details.description" label="Description">
                    </v-textarea>
                </div>

            </v-col>

            <v-col class="text-center" cols="12" md="7">
                <v-btn v-if="isAccepted == false" class="pt-6 pb-6" @click="CancelBooking()"  dark rounded color="red" block>Cancel Booking</v-btn>

                 

                 <div class="d-flex">
                     <v-btn v-if="isAccepted == false" class="pt-6 pb-6" @click="CancelBooking()"  dark rounded color="red" style="width:80%">Cancel Booking</v-btn>
                        <v-btn v-else-if="isAccepted == true" class="pt-6 pb-6" @click="CancelBooking()"  dark rounded color="green" style="width:80%">
                            <v-icon left>mdi-check</v-icon>
                            Booking Accepted
                        </v-btn>
                    <v-btn class="pt-6 pb-6 ml-2"   rounded color="primary" ><v-icon>mdi-message</v-icon></v-btn>
                     </div>

                     <small v-if="isAccepted == true">Wait for your transport to arrive. </small>
            </v-col>
        </v-row>
    
    </div>
</template>
<script>
export default {
    props:['details','isAccepted'],
    data(){
        return{

        }
    },
    methods:{
       CancelBooking(){
            axios.put('/api/booking/cancel_booking/'+this.details.id)
            .then((res)=>{
                this.$emit('cancelBooking');
                //this.$store.dispatch('setStatus', 1);
                //this.fetchBooking();
            })
        }
    }
}
</script>
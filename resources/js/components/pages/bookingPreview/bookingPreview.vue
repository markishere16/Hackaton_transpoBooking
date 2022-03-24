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
                            {{details.name}}
                        </v-col>

                         <v-col cols="4">
                           Pick Up Location:
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
                        <v-divider class="mb-2"></v-divider >
                        <span class="font-weight-medium">Description: <br>
                            {{details.description}}
                        </span>
                    </div>
                   
                </v-col>

                 <v-col  cols="12" md="7">

                     <div class="d-flex">
                        <v-btn @click="acceptBooking()" class="pt-6 pb-6" style="width:80%" rounded color="primary" >Accept Booking</v-btn>
                    <v-btn class="pt-6 pb-6 ml-2" outlined  rounded color="primary" ><v-icon>mdi-message</v-icon></v-btn>
                     </div>
                     
                </v-col>
            </v-row>
       
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            details: null
        }
    },
    methods:{
        getBookingDetails(){
            axios.get('/api/booking/details/'+this.$route.params.id)
            .then((res)=>{
                this.details = res.data;
            })
        },
        acceptBooking(){
            axios.put('/api/booking/accept_booking/'+this.$route.params.id)
            .then((res)=>{
                this.$store.dispatch('setStatus', 2);
                this.$router.push({name: 'Home'});
            })
        },
       
    },
    mounted(){
        this.getBookingDetails();
    }
}
</script>
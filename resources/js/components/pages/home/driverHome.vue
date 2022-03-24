<template>
    <div>
          <v-row justify="center" v-if="get_CurrentUser.status == 1">
            <v-col cols="12" md="7">
                <div class="d-flex">
                    <div class="font-weight-bold">
                        
                        <h3>Bookings</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <v-switch class="mt-0 pt-0" hide-details @change="updateProfile()"  v-model="get_CurrentUser.status" color="green" inset :label="status ? 'Active' : 'Inactive'"></v-switch>
                    </div>
                </div>
            </v-col>

            <v-col class="mb-0 pb-0" cols="12" md="7">
                <v-row v-if="get_CurrentUser.status == 1">
                      <v-col v-for="(item,i) in bookings" :key="i" class="mb-0 pb-0" cols="12" md="6">
                          <v-card link @click="openBooking(item.id)" class="pt-5 pb-5 pl-2 pr-2">
                              <v-list  class="ma-0 pa-0">
                                    <v-list-item class="ma-0 pa-0">
                                        <v-list-item-avatar size="50" >
                                            <v-img src="https://ih1.redbubble.net/image.1723920174.8467/st,small,507x507-pad,600x600,f8f8f8.jpg"></v-img>
                                           <!--  <v-icon large color="blue">mdi-rickshaw-electric</v-icon> -->
                                        </v-list-item-avatar>
                                        <v-list-item-content >
                                            <span class="font-weight-bold">{{item.name}}</span>
                                            <small>{{item.to}}</small>
                                        </v-list-item-content>
                                       <!--  <v-list-item-action>
                                            <div class="d-flex">
                                                <v-btn  @click="openBooking(item.id)" small  dark color="green" rounded class="mr-3">Accept</v-btn>
                                                <v-btn x-small dark color="secondary" rounded>Reject</v-btn>
                                            </div>
                                        </v-list-item-action> -->
                                    </v-list-item>
                                </v-list>
                          </v-card>
                    </v-col>  
                </v-row>
               
            </v-col>
        </v-row>
    
        <v-row justify="center" v-else-if="get_CurrentUser.status == 0">
            <v-col cols="12" md="7">
                <div class="d-flex">
                    <div class="font-weight-bold">
                        
                        <h3>Bookings</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <v-switch class="mt-0 pt-0" hide-details @change="updateProfile()"  v-model="get_CurrentUser.status" color="green" inset :label="status ? 'Active' : 'Inactive'"></v-switch>
                    </div>
                </div>
            </v-col>

            <v-col class="text-center" cols="12" md="7">
                <div>
                    Your are offline
                </div>
            </v-col>
        </v-row>

   

        
        <v-row justify="center"  v-if="get_CurrentUser.status == 2">
            <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-avatar size="150">
                        <v-img src="https://ih1.redbubble.net/image.1723920174.8467/st,small,507x507-pad,600x600,f8f8f8.jpg"></v-img>
                    </v-avatar>
                </div>
                <div>
                    <h3>Pending Booking</h3>
                </div>
            </v-col>

            <v-col  cols="12" md="7">
                <v-row>
                    <v-col cols="4">
                        Name:
                    </v-col>
                    <v-col cols="8">
                        {{bookings.name}}
                    </v-col>

                    <v-col cols="4">
                    Pick Up Location:
                    </v-col>
                    <v-col cols="8">
                        {{bookings.from}}
                    </v-col>

                    <v-col cols="4">
                    Destination:
                    </v-col>
                    <v-col cols="8">
                        {{bookings.to}}
                    </v-col>
                </v-row>


                <div>
                    <v-divider class="mb-2"></v-divider >
                    <span class="font-weight-medium">Description: <br>
                        {{bookings.description}}
                    </span>
                </div>
            
            </v-col>

            <v-col  cols="12" md="7">
                <div class="d-flex">
                    <v-btn @click="CancelBooking()" class="pt-6 pb-6" style="width:80%" dark rounded color="red" >Cancel Booking</v-btn>
                    <v-btn class="pt-6 pb-6 ml-2" outlined rounded color="primary" ><v-icon>mdi-message</v-icon></v-btn>
                </div>
            </v-col>
        </v-row>
         
    </div>
</template>
<script>
export default {
    props:['get_CurrentUser'],
    data(){
        return{
            status: false,
            items:[
                 {
                    id: 1,
                    name: 'Juan Tamad',
                    address: 'P2, Cauyan, Isa.'
                },
                {
                    id: 2,
                    name: 'Pedro Penduko',
                    address: 'Zone 3, Echague, Isa.'
                }
            ],
            bookings: []
        }
    },
    methods:{
        openBooking(id){
            this.$router.push({name: 'bookingPreview', params:{id: id}})
        },
        updateProfile(){
            axios.put('/api/users/update_profile/'+this.get_CurrentUser.user_id, this.get_CurrentUser)
            .then((res)=>{
                this.fetchBooking();
            })
        },
        async fetchBooking(){
            axios.get('/api/booking/all')
            .then((res)=>{
                this.bookings = res.data;
            })
        },
        CancelBooking(){
            axios.put('/api/booking/cancel_booking/'+this.bookings.id)
            .then((res)=>{
                this.$store.dispatch('setStatus', 1);
                this.fetchBooking();
            })
        }
    },
    mounted(){
        this.fetchBooking();
    }
}
</script>
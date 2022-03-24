<template>
    <div>
          <v-row>
            <v-col cols="12" md="7">
                <div class="d-flex">
                    <div class="font-weight-bold">
                        
                        <h3>Bookings</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <v-switch class="mt-0 pt-0" hide-details  v-model="get_CurrentUser.status" color="green" inset :label="status ? 'Active' : 'Inactive'"></v-switch>
                    </div>
                </div>
            </v-col>

            <v-col class="mb-0 pb-0" cols="12" md="7">
                <v-row v-if="get_CurrentUser.status">
                      <v-col v-for="(item,i) in items" :key="i" class="mb-0 pb-0" cols="12" md="7">
                          <v-card link class="pt-5 pb-5 pl-2 pr-2">
                              <v-list  class="ma-0 pa-0">
                                    <v-list-item class="ma-0 pa-0">
                                        <v-list-item-avatar >
                                            <v-icon large color="blue">mdi-rickshaw-electric</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content >
                                            <span class="font-weight-bold">{{item.name}}</span>
                                            <small>{{item.address}}</small>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <div class="d-flex">
                                                <v-btn  @click="openBooking(item.id)" small  dark color="green" rounded class="mr-3">Accept</v-btn>
                                               <!--  <v-btn x-small dark color="secondary" rounded>Reject</v-btn> -->
                                            </div>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                          </v-card>
                    </v-col>  
                </v-row>
                <v-row v-else>
                    <div>
                        <v-container fill-height>

                        </v-container>
                        Offline
                    </div>
                </v-row>
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
            ]
        }
    },
    methods:{
        openBooking(id){
            this.$router.push({name: 'bookingPreview', params:{id: id}})
        }
    }
}
</script>
<template>
    <div>

        <v-row>
            <v-col cols="6" xs="4">
                <div class="d-flex">
                    <div class="font-weight-bold">
                        <h3>History</h3>
                    </div>
                    <v-spacer></v-spacer>

                </div>
            </v-col>

            <v-col>
                <v-btn :dense="true" @click="clearHistory()">
                    Clear History
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">

            <v-col cols="12" md="7">
                <!--  <v-list>
                    <v-list-item v-for="(item, i) in myhistory" :key="i">
                        <v-list-item-content>
                            <v-list-item-title>
                                {{item.name}}
                            </v-list-item-title>
                             <v-list-item-subtitle>
                                 {{item.to}}
                             </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-checkbox></v-checkbox>
                        </v-list-item-action>
                    </v-list-item>
                </v-list> -->
                <v-row>
                    <v-col v-for="(item,i) in myhistory" :key="i" class="mb-0 pb-0" cols="12" md="6">
                        <v-card link @click="openBooking(item.id)" class="pt-5 pb-5 pl-2 pr-2">
                            <v-list class="ma-0 pa-0">
                                <v-list-item class="ma-0 pa-0">
                                    <v-list-item-avatar size="50">
                                        <v-img
                                            src="https://ih1.redbubble.net/image.1723920174.8467/st,small,507x507-pad,600x600,f8f8f8.jpg">
                                        </v-img>
                                        <!--  <v-icon large color="blue">mdi-rickshaw-electric</v-icon> -->
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                        <span class="font-weight-bold">{{item.name}}</span>
                                        <small v-if="item.booking_status == 'cancelled'"
                                            class="red--text">Cancelled</small>
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                myhistory: []
            }
        },
        methods: {
            fetchmyhistory() {
                axios.get('/api/booking/my-history')
                    .then((res) => {
                        this.myhistory = res.data;
                    })
            },
            clearHistory() {
                axios.post('api/booking/clear_all')
                .then((res)=>{
                    console.log(res.data);
                })
            }
        },
        mounted() {
            this.fetchmyhistory();
        }
    }

</script>

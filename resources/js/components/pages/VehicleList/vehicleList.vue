<template>
    <div>
       <!--  <v-app-bar app color="transparent" flat>
            <v-btn color="blue" icon>
                <v-icon>
                    mdi-arrow-left
                </v-icon>
            </v-btn>
        </v-app-bar> -->


        <v-row justify="center">
            <v-col cols="12" md="4">
                <v-card class="pa-4" color="#2196F3">
                    <div class="pt-2 pb-2 pl-2 pr-2">
                        <v-text-field hide-details rounded solo  value="FL. D Hall"></v-text-field>
                    </div>
                    <div class="pt-2 pb-2 pl-2 pr-2">
                        <v-text-field hide-details rounded solo value="Cauyan, Isa"></v-text-field>
                    </div>
                </v-card>

                <v-card elevation="1" class="mx-auto mt-3" outlined>
                    <v-list>
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
                                <div style="background-color:#2196F3;border-radius:10px" class="pa-4">
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
                            <v-btn class="pt-8 pb-8 pl-2 pr-2" dark color="#2196F3" >
                                <v-icon dark>{{item}}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>

                <v-container style="height:20px !important" class="pa-0" fluid>
                    <v-row>
                        <v-col  v-for="item in 3" class="pb-0 pt-0 pt-3" :key="item" cols="12" md="4">
                             <v-card elevation="1" class="mx-auto pa-2" outlined>
                                <div class="pa-1">
                                    <span>Name: Juan, Delacruz</span><br>
                                    <span>Contact #: 09012133555</span><br>
                                    <span>Type: Van</span>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

            </v-col>
        </v-row>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                'mdi-bus',
                'mdi-motorbike',
                'mdi-van-passenger',
                'mdi-rickshaw-electric'
            ]
        }
    }
}
</script>
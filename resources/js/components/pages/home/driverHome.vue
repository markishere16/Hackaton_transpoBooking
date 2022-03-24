<template>
    <div>
          <v-row>
            <v-col cols="12" md="7">
                <div>
                    <span class="font-weight-bold">Bookings</span>
                    
                </div>
            </v-col>
            <v-col  v-for="(item,i) in 5" :key="i" class="mb-0 pb-0" cols="12" md="7">
                 <v-expansion-panels accordion>
                    <v-expansion-panel>
                        <v-expansion-panel-header disable-icon-rotate hide-actions>
                            <v-list class="ma-0 pa-0">
                                <v-list-item class="ma-0 pa-0">
                                    <v-list-item-avatar >
                                        <v-icon large color="blue">mdi-rickshaw-electric</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content >
                                         <span class="font-weight-bold">Juan Tamad</span>
                                          <small>P2, San Fabian Cauyan</small>
                                    </v-list-item-content>
                                    <v-list-item-action>
                                        <div class="d-flex">
                                            <v-btn x-small dark color="green" rounded class="mr-3">Accept</v-btn>
                                            <v-btn x-small dark color="secondary" rounded>Reject</v-btn>
                                        </div>
                                        
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                           
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                       
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>
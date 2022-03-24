<template>
   <div>
        <v-app style="background-color:white" >
            <v-main>
                <v-container fluid fill-height>
                   <v-row align="center" justify="center">
                        <v-col class="text-center" cols="12" md="7">
                           <v-avatar size="100">
                               <v-icon size="100">mdi-rickshaw-electric</v-icon>
                           </v-avatar>
                       </v-col>
                       <v-col cols="12" md="7">
                           <v-text-field hide-details rounded outlined label="Username"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-text-field hide-details rounded outlined label="Password"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-btn :to="{name: 'Home'}" rounded block color="primary">Login</v-btn>
                       </v-col>
                   </v-row>

                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
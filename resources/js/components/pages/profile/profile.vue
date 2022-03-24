<template>
    <div>

        <v-row justify="center" >
            <v-col class="text-center" cols="12" md="7">
                <div class="mt-2">
                    <v-avatar size="120">
                        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                    </v-avatar>
                </div>
            </v-col>

             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-text-field label="First Name" hide-details rounded outlined value="Juan"></v-text-field>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-text-field label="Last Name" hide-details rounded outlined value="Dela Cruz"></v-text-field>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-text-field label="Address" hide-details rounded outlined value="Address"></v-text-field>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-btn  rounded block dark color="primary">Update</v-btn>
                </div>
            </v-col>
            <!-- <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-btn :to="{name: 'login'}" rounded block dark color="red">Logout</v-btn>
                </div>
            </v-col> -->
            
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
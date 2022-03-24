<template>
    <div>
        <v-app-bar style="background-color:white"   app  flat >
             <h3>Profile</h3>
            <v-spacer></v-spacer>
            <v-btn @click="logout()" color="red" icon>
                <v-icon >mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <v-row justify="center" >
            <v-col class="text-center" cols="12" md="7">
                <div class="mt-2">
                    <v-avatar size="120">
                        <v-img :src="get_CurrentUser.profile" alt="Profile"></v-img>
                    </v-avatar>
                    
                </div>
                <a @click.prevent="UploadProfile()" style="text-decoration:none" href>Update Picture</a>
            </v-col>

             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-text-field label="First Name" hide-details rounded outlined v-model="get_CurrentUser.first_name"></v-text-field>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-text-field label="Last Name" hide-details rounded outlined v-model="get_CurrentUser.last_name"></v-text-field>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div class="d-flex">
                    <v-text-field label="Address" hide-details rounded outlined v-model="get_CurrentUser.address"></v-text-field>
                    <v-btn color="primary" class="mt-2" large icon><v-icon large>mdi-map-marker</v-icon></v-btn>
                </div>
            </v-col>
             <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-btn @click="updateProfile()" class="pt-6 pb-6" rounded block dark color="primary">Update</v-btn>
                </div>
            </v-col>
            <!-- <v-col class="text-center" cols="12" md="7">
                <div>
                    <v-btn :to="{name: 'login'}" rounded block dark color="red">Logout</v-btn>
                </div>
            </v-col> -->
            
        </v-row>

        <input
        ref="fileInput"
        class="d-none"
        type="file"
        id="image-input"
        accept="image/jpeg"
        @change="onFileChange">
        
    </div>
</template>
<script>
import {
        mapGetters,
        mapActions
    } from "vuex";
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
    },
    computed: mapGetters(["get_CurrentUser"]),
    methods:{
        ...mapActions(['fetchCurrentUser']),
        logout() {
            this.$store.dispatch('clearClassesNames');
            this.isLogout = true;
            axios.post('/api/logout')
                .then(() => {
                    //this.clear_current_user();
                    this.$router.push({
                        name: "login"
                    })
                })
                .catch((e) => {
                })
            },
            updateProfile(){
                axios.put('/api/users/update_profile/'+this.get_CurrentUser.user_id, this.get_CurrentUser)
                .then((res)=>{

                })
            },
            UploadProfile(){
             this.$refs.fileInput.click();
            },
            onFileChange(element) {    
                this.imageFile = element.target.files[0];
                this.get_CurrentUser.profile =   URL.createObjectURL(this.imageFile)
            
            },
    },
   /*  mounted(){
        this.fetchCurrentUser();
    } */
}
</script>
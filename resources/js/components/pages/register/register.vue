<template>
   <div>
        <v-app style="background-color:white" >
            <v-main>
                <v-container fluid fill-height>
                   <v-row align="center" justify="center">
                        <v-col class="text-center" cols="12" md="7">
                           <div class="d-flex justify-center">
                               <v-img width="100" alt="logo" :src="logo"></v-img>
                           </div>
                       </v-col>

                        <v-col cols="12" md="7">
                           <v-text-field type="text" v-model="form.first_name" hide-details rounded outlined label="First Name"></v-text-field>
                       </v-col>

                        <v-col cols="12" md="7">
                           <v-text-field type="text" v-model="form.last_name" hide-details rounded outlined label="Last Name"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-text-field type="text" v-model="form.contact_no" hide-details rounded outlined label="Contact Number"></v-text-field>
                       </v-col>
                       <v-col cols="12" md="7">
                           <v-text-field type="text" v-model="form.username" hide-details rounded outlined label="Username"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-text-field type="password" v-model="form.password"  hide-details rounded outlined label="Password"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-btn @click="signup()" :loading="loading"  rounded block color="primary">Register</v-btn>
                       </v-col>
                   </v-row>

                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
<script>
export default {
    data(){
        return{
            logo: '../../images/transpologo2.jpg',
            form:{
                username: '',
                password:''
            },
            loading: false
        }
    },
    methods:{
        async signup(){
            this.loading = true;
            axios.post('/api/sign-up', this.form)
            .then((res)=>{
                if(res.data.success == true){
                    setTimeout(() => {this.isLoading = false,
                    this.$router.push({name: "Home"})
                    }, 1000);
                }else{
                    this.loading = false;
                }
            }).catch(()=>{
                this.loading = false;
            })
        }
    }
}
</script>
<template>
   <div>
        <vue-splash
    :show="!isloaded"
    :logo="logo"
    color="#FF9800"
    :size="250"
    :fixed="true"
  />
        <v-app v-if="isloaded" style="background-color:white" >
            <v-main>
                <v-container fluid fill-height>
                   <v-row align="center" justify="center">
                        <v-col class="text-center" cols="12" md="7">
                           <div class="d-flex justify-center">
                               <v-img width="100" alt="logo" :src="logo"></v-img>
                           </div>
                       </v-col>
                       <v-col cols="12" md="7">
                           <v-text-field type="text" v-model="form.username" hide-details rounded outlined label="Username"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-text-field type="password" v-model="form.password"  hide-details rounded outlined label="Password"></v-text-field>
                       </v-col>
                        <v-col cols="12" md="7">
                           <v-btn @click="login()" :loading="loading"  rounded block color="primary">Login</v-btn>
                       </v-col>
                   </v-row>

                </v-container>
            </v-main>
        </v-app>
    </div>
</template>
<script>
import YourLogo from "../../../../../public/images/logoHackaton.png";
export default {
    data(){
        return{
            logo: '../../images/logoHackaton.png',
            form:{
                username: '',
                password:''
            },
            loading: false,
            isloaded: false
        }
    },
    computed: {
        logo() {
            return YourLogo;
        },
    },
    methods:{
        async login(){
            this.loading = true;
            axios.post('/api/login', this.form)
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
    },
    mounted(){
         setTimeout(() => {this.isloaded = true}, 2000);
    }
}
</script>
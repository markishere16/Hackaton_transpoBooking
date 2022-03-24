<template>
   <div>
        <v-app style="background-color:white" >
            <v-main>
                <v-container fluid fill-height>
                   <v-row align="center" justify="center">
                        <v-col class="text-center" cols="12" md="7">
                           <div>
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
                           <v-btn @click="login()"  rounded block color="primary">Login</v-btn>
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
            logo: '../../images/transpologo.png',
            form:{
                username: '',
                password:''
            }
        }
    },
    methods:{
        async login(){
            axios.post('/api/login', this.form)
            .then((res)=>{
                if(res.data.success == true){
                    this.$router.push({name: "Home"})
                }
            })
        }
    }
}
</script>
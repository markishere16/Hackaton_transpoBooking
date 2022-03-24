<template>
    <div>
    <v-app style="background-color:white" >
        <!-- <navigation></navigation> -->
        <v-main>
            <v-container fluid class="container">
                <router-view ></router-view>
            </v-container>
        </v-main>
        <bottomnavigation v-if="!$vuetify.breakpoint.mdAndUp"></bottomnavigation>
    </v-app>
</div>
</template>
<script>
import navigation from './navigation'
import bottomnavigation from './bottom_navigation'
import {
        mapGetters,
        mapActions
    } from "vuex";
export default {
    components:{
        navigation,
        bottomnavigation
    },
    data(){
        return{

        }
    },
    computed: mapGetters(["get_CurrentUser"]),    
    methods:{
        ...mapActions(['fetchCurrentUser']),
         getUserDetails(){
            axios.get('/api/users/detail').then((res) => {
                this.role = res.data.role;
                this.UserDetails = res.data;
            }).catch((error) => {
            
            });
        },
    },
    mounted(){
        this.fetchCurrentUser();
    }

}
</script>

<style scoped>
/* .container {
    padding: 0;
} */
</style>
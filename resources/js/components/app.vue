<template>
   <!--  <v-app >
        <navigation></navigation>
        <v-main>
            <v-container fluid width="100%">
                <router-view></router-view>
            </v-container>          
        </v-main>
        <bottomnavigation v-if="!$vuetify.breakpoint.mdAndUp"></bottomnavigation>
    </v-app> -->
   <!--  <v-app>
        <navigation></navigation>
        <v-main>
            <router-view></router-view>
        </v-main>
        <bottomnavigation v-if="!$vuetify.breakpoint.mdAndUp"></bottomnavigation>
    </v-app>
 -->

<div>
   
    <router-view></router-view>
</div>
</template>
<script>
import navigation from './layout/navigation'
import bottomnavigation from './layout/bottom_navigation'

export default {
    components:{
        navigation,
        bottomnavigation
    },
   
}
</script>

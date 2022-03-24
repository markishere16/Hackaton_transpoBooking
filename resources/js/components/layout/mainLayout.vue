<template>
    <div>
    <v-app style="background-color:white" >
        <navigation></navigation>
        <v-main>
            <v-container fluid>
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
export default {
    components:{
        navigation,
        bottomnavigation
    }
}
</script>
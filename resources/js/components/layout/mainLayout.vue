<template>
    <div>
    <v-app style="background: rgb(238, 238, 238);">
        <navigation></navigation>
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
export default {
    components:{
        navigation,
        bottomnavigation
    }
}
</script>

<style scoped>
.container {
    padding: 0;
}
</style>
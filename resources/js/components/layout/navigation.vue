<template>
    <div>
         <v-app-bar style="background-color:white"   app  flat >
          <!--   <v-app-bar-nav-icon color="blue" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      
               <!--  <v-toolbar-title class="ml-0 white--text">
                    <span class="pointer">Name</span>
                </v-toolbar-title> -->
         <!--    <v-spacer></v-spacer>
         
            <v-btn color="blue" icon>
                <v-icon>mdi-account</v-icon>
            </v-btn> -->
        </v-app-bar>

        <div v-if="$vuetify.breakpoint.mdAndUp">
             <v-navigation-drawer v-if="$vuetify.breakpoint.mdAndUp" v-model="drawer" clipped app>
                <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav>
                   <v-list-item link  exact>
                        <v-list-item-action>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                            Home
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-list-item link exact>
                        <v-list-item-action>
                            <v-icon>mdi-contacts</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                Services
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            drawer: false,

        }
    }
}
</script>
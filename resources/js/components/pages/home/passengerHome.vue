<template>
    <div>
         <v-app-bar class="pt-2" style="background-color:white"   app  flat >
             <v-text-field outlined
                  hide-details
                  rounded
                prepend-inner-icon="mdi-magnify"
                placeholder="Search Location">
                </v-text-field>
        </v-app-bar>
        <v-row justify="center">
            <v-col cols="12" md="7">
                <div class="mt-1 mb-1">
             
                <div style="border-radius:15px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.820602732005!2d121.77248941527648!3d16.93413922017468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338551ae73cf6959%3A0x99709e22896938af!2sF.L.DY%20COLISEUM!5e0!3m2!1sen!2sph!4v1648147019523!5m2!1sen!2sph" 
                    width="100%" height="640" style="border:0;border-radius:10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                 </iframe>  
                </div>

                <div>
                    <v-btn @click="sheet = true" class="pt-6 pb-6" color="primary" block rounded>Book Transport</v-btn>
                </div>
             </div>
            </v-col>
        </v-row>
      

        <v-bottom-sheet v-model="sheet">
            <v-sheet
                class="text-center"
                height="400px">
                <v-btn class="mt-3" icon color="red" @click="sheet = !sheet">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <div class="py-3">
                    This is a bottom sheet using the controlled by v-model instead of activator
                </div>
            </v-sheet>
            </v-bottom-sheet>
           
             
     
    </div>
</template>
<script>
export default {
    data(){
        return{
            sheet: false
        }
    }
}
</script>
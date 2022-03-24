<template>
    <div class="pt-4">

        <v-row>
            <v-col cols="12" lg="9">
                <h2>
                    Manage Drivers
                </h2>
            </v-col>


            <v-col cols="12" lg="3" style="display:flex;justify-content: end;">


                <v-btn color="primary" dark @click="openAdd()">
                    <v-icon left>mdi-account-plus-outline</v-icon>
                    Add Driver
                </v-btn>
            </v-col>


        </v-row>
        <v-card elevation="2" v-if="!loading">
            <v-card-title>
                Driver

                <v-spacer></v-spacer>

                <v-text-field v-model="search" placeholder="First Name,Last Name" append-icon="mdi-magnify"
                    label="Search" single-line hide-details>
                </v-text-field>


            </v-card-title>

            <v-data-table :headers="headers" :items="get_drivers" :items-per-page="10" class="elevation-1">
                <template v-slot:body="{ items }">
                    <tbody>
                        <tr v-for="(item, index) in items" :key="index">

                            <td> {{item.user_id}} </td>
                            <td> {{item.last_name }} </td>
                            <td> {{item.first_name}} </td>
                            <td> {{item.contact_no}} </td>
                            <td> {{item.address}} </td>

                            <td>
                                <v-chip :color="checkVehicle(item.vehicle_type)"
                                    text-color="white">
                                     {{item.vehicle_type}}
                                </v-chip>

                            
                            </td>

                            <td> {{item.user_name}} </td>

                            <!-- <td> {{item.license_no}} </td> -->


                            <td>
                                <v-icon :color="item.isVerified != null ? 'success' : ''">
                                    {{item.isVerified ? 'mdi-check' : ''}}</v-icon>
                            </td>

                            <td>
                                <v-btn color="primary" :disabled="IsResetting && IsResetting_id == item.user_id"
                                    @click="updatePass(item.user_id)">
                                    {{IsResetting && IsResetting_id == item.user_id ? 'Reseting...' : ' Reset Password'}}
                                </v-btn>
                            </td>
                            <td>

                                <v-btn icon color="success" @click="openEdit(item.user_id)">
                                    <v-icon>
                                        mdi-pencil
                                    </v-icon>

                                </v-btn>
                                <v-btn icon color="red" @click="openDelete(item.user_id, index)">
                                    <v-icon>
                                        mdi-delete
                                    </v-icon>

                                </v-btn>
                            </td>

                        </tr>
                        <tr v-if="items.length == 0">
                            <td colspan="42" class="text-center"> No data available</td>
                        </tr>




                    </tbody>
                </template>
            </v-data-table>

        </v-card>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="">
                    {{this.type == "add" ? 'Add Teacher' :  'Update Teacher'}}
                </v-card-title>
                <v-divider></v-divider>
                <v-container>

                    <v-form class="text-center " ref="RegisterForm" v-model="valid" lazy-validation>
                        <v-row class="pa-5">
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="first_name" />
                                <v-text-field :rules="nameRules" label="First Name" name="first_name"
                                    v-model="form.first_name" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="middle_name" />
                                <v-text-field label="Middle Name" :rules="nameRules" name="middle_name"
                                    v-model="form.middle_name" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="last_name" />
                                <v-text-field label="Last Name" :rules="nameRules" name="lastname"
                                    v-model="form.last_name" type="text" color="primary" outlined
                                    @keyup="SetPassword(form.last_name)" />
                            </v-col>
                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="contact_no" />
                                <v-text-field label="Contact Number" :rules="nameRules" name="contact_no"
                                    v-model="form.contact_no" type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="address" />
                                <v-text-field label="Address" :rules="nameRules" name="address" v-model="form.address"
                                    type="text" color="primary" outlined />
                            </v-col>

                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="user_name" />
                                <v-text-field label="Username" :rules="nameRules" name="user_name"
                                    v-model="form.user_name" type="text" color="primary" outlined />
                            </v-col>
                            <!-- <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="last_name" />
                                <v-text-field label="Suffix" name="suffix"
                                    v-model="form.suffix" type="text" color="primary" outlined
                                   />
                            </v-col> -->


                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12" v-if="type== 'add'">
                                <HasError class="error--text" :form="form" field="password" />
                                <v-text-field autocomplete="off" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    label="Password" name="password" v-model="form.password"
                                    :type="show ? 'text' : 'password'" color="primary"
                                    :rules="[rules.required, rules.min]" counter @click:append="show = !show"
                                    outlined />
                            </v-col>


                            <v-col class="ma-0 pa-0 mb-1" cols="12" md="12">
                                <HasError class="error--text" :form="form" field="department" />
                                <v-select :items="vehicle_types" v-model="form.vehicle_type" item-value="id"
                                    item-text="name" return-object label="Vehicle Types" dense outlined></v-select>
                            </v-col>


                        </v-row>
                    </v-form>
                </v-container>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="dialog = false;$refs.RegisterForm.reset()">Cancel</v-btn>
                    <v-btn text @click="addFunction()" :loading="IsAddUpdating" :disabled="IsAddUpdating">
                        {{this.type == "add" ? 'Add' :  'Update'}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <v-dialog v-model="Deldialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to delete this?
                </v-card-title>
                <!-- <v-card-text>{some message} </v-card-text> -->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="Deldialog = false;$refs.RegisterForm.reset()">
                        No
                    </v-btn>
                    <v-btn :loading="IsDeleting" color="primary" text @click="deleteUser()">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </div>



</template>


<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    // import csvToJson from 'convert-csv-to-json';
    import axios from 'axios';
    export default {
        data: function () {
            return {
                IsBulkadding: false,
                vehicle_types: ['Tricycle', 'Van', 'Single Motor', 'Bus'],
                user_type: 'Driver',
                Deldialog: false,
                dialog: false,
                dialog_multi_user: false,
                temp_id: '',
                IsDeleting: false,
                IsAddUpdating: false,
                IsResetting: false,
                IsResetting_id: null,
                deleteIndex: null,
                type: '',
                search: "",
                valid: true,
                role: ['Teacher', 'Student'],
                form: {
                    first_name: "",
                    middle_name: "",
                    last_name: "",
                    user_name: "",
                    password: "",
                    password_confirmation: "",
                    verified: null,
                    department: null,
                    birthDay: new Date(),
                    suffix: ""
                },


                nameRules: [
                    v => !!v || 'Field is required',
                    v => (v && v.length <= 50) || 'Name must be less than 50 characters',
                ],
                loginEmailRules: [
                    v => !!v || "Field is required",
                    v => /.+@.+\..+/.test(v) || "Email must be valid"
                ],

                RoleRules: [
                    v => !!v || "Field is required",
                ],
                show: false,
                show1: false,
                rules: {
                    required: value => !!value || "Field is required.",
                    min: v => (v && v.length >= 6) || "min 6 characters"
                },
                headers: [{
                        text: 'ID',
                        value: 'user_id',
                        align: 'start',
                    },
                    {
                        text: 'Last Name',
                        value: 'last_name',
                        align: 'start',
                    },
                    {
                        text: 'First Name',
                        value: 'first_name',
                        align: 'start',
                    },
                    {
                        text: 'Contact Number',
                        value: 'contact_no',
                        align: 'start',
                    },
                    {
                        text: 'Address',
                        value: 'address',
                        align: 'start',
                    },
                    {
                        text: 'Vehicle Type',
                        value: 'vehicle_type',
                        align: 'start',
                    },
                    // {
                    //     text: 'Middle Initial',
                    //     value: 'middle_name',
                    //     align: 'start',
                    // },



                    {
                        text: 'Username',
                        value: 'username',
                        align: 'start',
                    },
                    {
                        text: 'Verified',
                        value: 'verified',
                        align: 'start',
                    },
                    {
                        text: 'Password Reset',
                        sortable: false
                    },


                    {
                        text: 'Actions',
                        sortable: false
                    },
                ],
                teacherList: [],
                loading: true,

                direction: 'top',
                fab: false,
                fling: false,
                hover: false,
                tabs: null,
                top: false,
                right: true,
                bottom: true,
                left: false,
                transition: 'slide-y-reverse-transition',
                json_users_file: null,
                json_users_text_area: null,
                department_id: null

            }

        },
        computed: {
            ...mapGetters(["get_drivers"]),
        },
        methods: {
            checkVehicle(type) {
                if(type == this.vehicle_types[0]) {
                    return 'green';
                }
                if(type == this.vehicle_types[1]) {
                    return 'orange';
                }
                 if(type == this.vehicle_types[2]) {
                    return 'red';
                }
                  if(type == this.vehicle_types[3]) {
                    return 'yellow';
                }
            },
            openAdd() {
                this.type = 'add'
                this.dialog = true;
            },

            addFunction() {
                axios.post(`/api/users/upsert/Driver`, this.form)
                    .then((response) => {

                        if (response.status == 200) {

                            this.$refs.RegisterForm.reset()
                            this.valid = true;
                            this.dialog = false;

                            this.IsAddUpdating = false;

                            this.$store.dispatch('fetchAllDriver').then((res) => {
                                this.loading = false;
                            });
                        } else {
                            this.IsAddUpdating = false;
                            this.toastError('Something went wrong!')

                        }
                    })
                    .catch((err) => {
                        this.IsAddUpdating = false;
                        this.toastError('Something went wrong while adding Faculty!');
                    })

            },

        },
        mounted() {
            console.log('mounted');
            this.$store.dispatch('fetchAllDriver').then((res) => {
                this.loading = false;
            });
        },

    }

</script>

<style>
    .v-input__slot {
        margin-bottom: 0 !important;
    }

</style>

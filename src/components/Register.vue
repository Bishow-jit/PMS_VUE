<template>
    <div class="registration">
        <div class="container mt-4">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="card p-4">
                <h3 class="text-center mb-4 fs-3">PROJECT MANAGEMENT SYSTEM</h3>
                <h3 class="text-center mb-4 fs-5">USER REGISTRATION</h3>
                <form @submit.prevent="register()">
                  <div class="form-group mb-3">
                    <label for="name">Name:</label>
                    <input 
                      type="text" 
                      v-model="form.name" 
                      id="name" 
                      name="name"
                      class="form-control" 
                      placeholder="Name" 
                      required
                      @blur="touched.name = true"
                    />
                    <div v-if="!form.name && touched.name" class="text-danger">
                      Name is required.
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <label for="email">Email:</label>
                    <input 
                      type="email" 
                      v-model="form.email" 
                      id="email" 
                      name="email"
                      class="form-control" 
                      placeholder="Email" 
                      required
                      email
                      @blur="touched.email = true"
                    />
                    <div v-if="!form.email && touched.email" class="text-danger">
                      Email is required and must be a valid email.
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <label for="mobileNo">Mobile No. :</label>
                    <input 
                      type="number" 
                      v-model="form.mobileNo" 
                      id="mobileNo" 
                      name="mobileNo"
                      class="form-control" 
                      placeholder="Mobile No." 
                      required
                      @blur="touched.mobileNo = true"
                    />
                    <div v-if="!form.mobileNo && touched.mobileNo" class="text-danger">
                      Mobile number is required.
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <label for="gender">Gender:</label>
                    <select 
                      v-model="form.gender" 
                      id="gender" 
                      name="gender"
                      class="form-control" 
                      required
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                    <div v-if="!form.gender && touched.gender" class="text-danger">
                      Gender is required.
                    </div>
                  </div>
                  <div class="form-group mb-3">
                    <label for="username">Username:</label>
                    <input 
                      type="text" 
                      v-model="form.username" 
                      id="username" 
                      name="username"
                      class="form-control" 
                      placeholder="Username" 
                      required
                      @blur="touched.username = true"
                    />
                    <div v-if="!form.username && touched.username" class="text-danger">
                      Username is required.
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <label for="password">Password:</label>
                    <input 
                      type="password" 
                      v-model="form.password" 
                      id="password" 
                      name="password"
                      class="form-control" 
                      placeholder="Password" 
                      required
                      @blur="touched.password = true"
                    />
                    <div v-if="!form.password && touched.password" class="text-danger">
                      Password is required.
                    </div>
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <div class="d-flex flex-row justify-content-center mt-3">
                      <p>Already have an account?</p>
                      <router-link to="/login" class="ms-1">Login</router-link>
                    </div>
                    <button type="submit" class="btn btn-primary" 
                    :disabled="!isValidForm">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import router from '@/router';
    import UserService from '@/Service/UserService';
    import { computed, ref } from 'vue';
    import { toast } from 'vue3-toastify';
    import 'vue3-toastify/dist/index.css'

    const form = ref({
        name: '',
        email: '',
        mobileNo: '',
        gender: '',
        username: '',
        password: ''
    })

     const touched = ref({
        name: false,
        email: false,
        mobileNo: false,
        gender: false,
        username: false,
        password: false
    })

    const isValidForm = computed(()=>{
      return (
      form.value.name &&
      form.value.email &&
      form.value.mobileNo &&
      form.value.gender &&
      form.value.username &&
      form.value.password)
    })

    async function register() {
          try{
            const userData = {
            name : this.form.name,
            email : this.form.email,
            mobileNo : this.form.mobileNo,
            gender : this.form.gender,
            username: this.form.username,
            password: this.form.password
          }
          const response = await UserService.userRegister(userData);
          console.log('registration successful', response.data);

          if(response.data.data){
           await router.push('/login')
            toast.success(response.data.msg,{
              autoClose: 3000,
              theme:'dark'
            })
           
          }

          }catch(error){
            console.error("Registration failed:", error);
          }
         
        }
  
    </script>
    
    <style scoped>
    .registration {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8f9fa;
      }
    
    .card {
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      }
      .btn-primary {
        background-color: #007bff;
        border: none;
      }
      .btn-primary:hover {
        background-color: #0056b3;
      }
    </style>
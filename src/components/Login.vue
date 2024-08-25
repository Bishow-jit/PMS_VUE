<template>
    <div class="login">
    <div class="container justify-content-center align-items-center align-content-center">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card p-4">
            <h3 class="text-center mb-4 fs-3">PROJECT MANAGEMENT SYSTEM</h3>
            <h3 class="text-center mb-4 fs-5">USER LOGIN</h3>
            <form @submit.prevent="login()">
              <div class="form-group mb-4">
                <label for="username">Username :</label>
                <input 
                  type="text" 
                  v-model="form.username" 
                  id="username" 
                  name="username"
                  class="form-control" 
                  placeholder="Enter Username" 
                  required
                  @blur="touched.username = true" 
                />
                <div v-show="!form.username && touched.username" class="text-danger">
                  Username is required.
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="password">Password :</label>
                <input 
                  type="password" 
                  v-model="form.password" 
                  id="password" 
                  name="password"
                  class="form-control" 
                  placeholder="Enter Password" 
                  required
                  @blur="touched.password = true" 
                />
                <div v-show="!form.password && touched.password" class="text-danger">
                  Password is required.
                </div>
              </div>
              <div class="d-flex justify-content-center mt-3 flex-column">
                <button type="submit" class="btn btn-primary btn-block" :disabled="!isValidForm">Login</button>
                <div class="d-flex flex-row justify-content-center mt-3">
                  <p>Don't have an account?</p>
                  <router-link to="/register" class="ms-1">Register</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import UserService from '@/Service/UserService';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import router from '@/router';

const form = ref({
  username:'',
  password:''
})
const touched = ref({
  username: false,
  password: false
})
const isValidForm = computed(()=>{
  return form.value.username && form.value.password;
})

async function login() {
      try {
        const userData = {
          username: this.form.username,
          password: this.form.password
        };
        const response = await UserService.userLogin(userData);
        console.log("Login successful:", response.data);
        if(response.data && response.data.isTokenValid){
          localStorage.setItem('token', response.data.accessToken)
          await router.push('/dashboard')
          toast.success(response.data.message,{
              autoClose: 2000,
              theme:'dark'
            })
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  

</script>

<style scoped>
.login {
    height: 100vh;
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
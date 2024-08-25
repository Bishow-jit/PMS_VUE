<template>
   <header class="bg-primary text-white py-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="mb-0">Project Management System</h1>
        <nav>
          <ul class="nav">
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/dashboard">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/user-table">User Table</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/create-project">Create Project</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" @click.prevent="downloadReport">Download Report</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-white" to="/user-profile">My Profile</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" @click.prevent="logout">LogOut</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>

<script setup>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'
import router from '@/router';

function downloadReport() {
  alert('Download Report');
  console.log('Download Report');
}

async function logout(){
  localStorage.removeItem('token');
  await router.push('/login')
  toast.warning('Logged Out',{
              autoClose: 2000,
              theme:'dark'
            })
}
</script>

<style scoped>

</style>
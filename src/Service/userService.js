import axios from "axios";

class UserService {
  constructor() {
    this.baseurl =  import.meta.env.VITE_BASEURL; 
  }

  async userLogin(userData) {  
    try {
      const response = await axios.post(`${this.baseurl}/login`, userData);
      return response;
    } catch (error) {
      console.error("Login error:", error);
      throw error; 
    }
  }

  async userRegister(data){
    try {
      const response = await axios.post(`${this.baseurl}/registration`,data);
      return response;
    } catch (error) {
      console.error("Registration Failed",error);
    }
  }
}

export default new UserService();
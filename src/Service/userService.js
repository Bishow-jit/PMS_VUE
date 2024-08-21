import axios from "axios";

class UserService {
    constructor(){
        this.baseurl = process.env.VUE_APP_ROOT_API;
    }

    async userLogin(userData) {
        try {
          console.log('url', this.baseurl)  
          const response = await axios.post(`${this.baseurl}/login`, userData);
          console.log(response); 
          return response
        } catch (error) {
          console.error("Login error:", error);
          throw error; 
        }
      }
    }

export default UserService;
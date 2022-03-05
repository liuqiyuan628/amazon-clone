import axios from "axios";

const instance = axios.create({
  baseURL: "FIREBASE URL HERE", //THE API URL
  //http://localhost:5001/clone-549aa/us-central1/api
});

export default instance;



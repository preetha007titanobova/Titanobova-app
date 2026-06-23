import axios from "axios";

// const Api = axios.create({
//   baseURL:"http://localhost:7000/api/v1",
// });
// const Api = axios.create({
//   baseURL:"http://titanobova-api-v11-env.eba-8w2gz2my.us-east-1.elasticbeanstalk.com/api/v1",
// });
const Api = axios.create({
  baseURL: "https://api.titanobova.in/api/v1",
});

export default Api;
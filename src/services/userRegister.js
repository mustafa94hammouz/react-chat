import axios from "axios";

export default function register(data) {
  return axios({
    method: "post",
    url: "http://localhost:1234/user/register",
    data: {
      firstName: data.fName,
      lastName: data.lName,
      email: data.email,
      password: data.password
    }
  });
}

import axios from "axios";

export default function login(data) {
  return axios({
    method: "post",
    url: "http://localhost:1234/user/login",
    data: {
      email: data.email,
      password: data.password
    }
  });
}

import axios from "axios";

export default function register(data) {
  axios({
    method: "post",
    url: "http://localhost:1234/register/",
    data: {
      firstName: data.fName,
      lastName: data.lName,
      email: data.email,
      password: data.password
    }
  });
}

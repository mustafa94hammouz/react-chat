import axios from "axios";

export default function getUsers(token) {
  return axios({
    method: "get",
    url: "http://localhost:1234/user/users",
    headers: {
      Authorization: token
    }
  });
}

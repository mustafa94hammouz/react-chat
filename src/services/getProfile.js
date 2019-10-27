import axios from "axios";

export default function getProfile(token) {
  return axios({
    method: "get",
    url: "http://localhost:1234/user/profile",
    headers: {
      Authorization: token
    }
  });
}

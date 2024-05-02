import axios from "axios";

const Base_URL = () => {
  if (window.location.hostname.includes("localhost")) {
    return "https://api.codewarp.in";
  } else {
    return "https://api.codewarp.in";
  }
};

export const Post = (url, payload) => {
  return axios.post(Base_URL() + url, 
  payload, 
  {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

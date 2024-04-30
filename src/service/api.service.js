import axios from "axios";

const Base_URL = () => {
  if (window.location.hostname.includes("localhost")) {
    return "http://localhost:8080";
  } else {
    return "https://codewarpapi.netlify.app/.netlify/functions/app";
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
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a110ca68bdc8caa56cd06ddd9d6acdd82f0657f8f2434dae637f8115bd024a00"
  }
});

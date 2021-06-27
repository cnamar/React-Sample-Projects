import axios from "axios";
import { baseurl } from "../Constants/Constants";
export default axios.create({
  baseURL: baseurl,
});

import axios from "axios";
import { actionTypes } from "../constants";

const http = axios.create({
  baseURL: "http://localhost:8080"
});

export default {
  async [actionTypes.SALVAR_CADASTRO](context, { formulario }) {
    return await http.post("", formulario);
  }
};

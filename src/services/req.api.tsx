import api from "@Axios";

export const getProdutos = () => {
  const result = api
    .get("/produtos")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
  return result
}

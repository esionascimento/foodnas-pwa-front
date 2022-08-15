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

export const postCreateProduto = (data: any) => {
  const result = api
    .post("/produtos", data)
    .then((response) => {
      console.log("🚀 | .then | response", response)
      return response.data;
    })
    .catch((err) => {
      console.log("🚀 | postCreateProduto | err", err)
      return err;
    });
  return result
}

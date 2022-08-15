import ComponentTable from "@Components/Table";
import { Header } from "src/components/Header";
import * as api from "src/services/req.api";
import { useEffect, useState } from "react";
import { configTableProdutoAll } from "src/config/table";

const PageProdutoListar = () => {
  const [produtos, setProdutos] = useState();

  const fetchProdutosAll = async () => {
    const resultProdutosAll = await api.getProdutos()
    if (resultProdutosAll?.message !== "success") return;
    setProdutos(resultProdutosAll.info);
  }

  useEffect(() => {
    fetchProdutosAll()
  }, []);

  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-16 px-4 md:mt-20 md:px-16 py-4 w-full">
        {produtos &&
          <ComponentTable columns={configTableProdutoAll} produtos={produtos}/>
        }
      </main>
    </div>
  )
}

export default PageProdutoListar

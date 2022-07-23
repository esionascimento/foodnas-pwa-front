import { useState } from "react";
import Store from "src/components/Container/Store";
import { Header } from "src/components/Header";

const Loja = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 px-4 md:mt-20 md:px-16 py-4 w-full">
          <Store />
        </main>
      </div>
    </>
  )
}

export default Loja;

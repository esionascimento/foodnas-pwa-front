import { Header } from "src/components/Header";
import AddStock from 'src/components/Container/AddStock';

const PageProdutoCriar = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-16 px-4 md:mt-20 md:px-16 py-4 w-full">
        <AddStock />
      </main>
    </div>
  )
}

export default PageProdutoCriar

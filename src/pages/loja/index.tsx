import { Header } from "src/components/Header";
// import LojasComponent from 'src/components/Lojas';
import Scanner from 'src/components/Scanner';

const Restaurantes = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-16 px-4 md:mt-20 md:px-16 py-4 w-full">
          <Scanner />
        </main>
      </div>
    </>
  )
}

export default Restaurantes;

import { Header } from "src/components/Header";
import { Container } from 'src/components/Container';

const Dashboard = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-16 px-4 md:mt-20 md:px-16 py-4 w-full">
        <Container />
      </main>
    </div>
  )
}

export default Dashboard

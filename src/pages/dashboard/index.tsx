import { Header } from "src/components/Header";

const Dashboard = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

      <main className="mt-24 p-8 w-full">Main</main>
    </div>
  )
}

export default Dashboard

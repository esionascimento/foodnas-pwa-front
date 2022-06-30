import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Offline: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col h-full items-center justify-center py-2">
      <Head>
        <title>Offline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Aplicação sem conexão</h2>
      <p>Conecte na internet</p>
    </div>
  )
}

export default Offline

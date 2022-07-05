import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='application-name' content='FoodNas' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
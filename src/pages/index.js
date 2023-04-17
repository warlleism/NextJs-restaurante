import Head from 'next/head'
import Carousel from '../../components/carousel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria</title>
        <meta name="description" content="Melhor pizzaria da cidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Allan Alvarenga</title>
      </Head>

      <main className={styles.main}>
        <Image src="/spoiler.svg" layout='fill' />
      </main>

      <footer className={styles.footer}>
        Em breve!
      </footer>
    </div >
  )
}

export default Home

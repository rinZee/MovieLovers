import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Lovers</title>
        <meta name="description" content="site for movie lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Movie Lovers
        </h1>

        <p className={styles.description}>
        Share your love for movies
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Movie One</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Movie Two</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        made by Tsheten Sherpa
      </footer>
    </div>
  )
}

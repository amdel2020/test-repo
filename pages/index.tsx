import type { NextPage } from 'next'
import Head from 'next/head'

import HeroPost from '../components/hero-post'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'

import styles from '../styles/Home.module.css'

type Props = {
  allPosts: Post[]
}

const Home = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]

  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {allPosts.map(p => <div>{p.title}</div>)}
      </div>

      <main className={styles.main}>
        
        {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
  
}

export default Home
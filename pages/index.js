import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Intro from '../components/AboutMe'
import Manifesto from '../components/Manifesto'
import NavHeader from '../components/NavHeader'
import Vote from '../components/Vote'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-lime-50'>
      <Head>
        <title>Mary 4 President</title>
        <meta name="description" content="This is Mary's manifesto webpage for NFVCB Cooperative President." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavHeader />
      <Hero />
      <Intro />
      <Manifesto />
      <Vote />
      <Footer />
    </div>
  )
}

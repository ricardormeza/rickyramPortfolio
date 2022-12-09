import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-scroll z-0
    '>
      <Head>
        <title>Ricky RaMx - Portfolio</title>
        
      </Head>

      {/* HEADER */}
      <Header/>

      {/* HERO */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      
      {/* EXPERIENCE */}
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}
      
    </div>
  )
}

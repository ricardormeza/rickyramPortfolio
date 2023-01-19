import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'
import ContactMe from '../components/ContactMe'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home =({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Ricky RaMx - Portfolio</title>
      </Head>

      {/* HEADER */}
      <Header socials={socials}/>

      {/* HERO */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      
      {/* EXPERIENCE */}
      {/* <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences}/>
      </section> */}

      {/* SKILLS */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* PROJECTS */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* CONTACT ME */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      <Link href='#hero'>
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div>

        </div>
      </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    // next.js puede regenerar la pagina cuando la respuesta 
    // venga al menos cada 10 seg.
    revalidate: 10,
  };
};
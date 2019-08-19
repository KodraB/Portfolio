import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>BESIAN KODRA</BigTitle>
          <br />
          <Title>Developer</Title>
        <Subtitle>
           Hi, I'm Besian. I am a Web and Software Development student focused on expanding my knowledge and experience in turning ideas into experiences. 
           Programming or coding has been a passion of mine since the days I started working with computers. 
           In 2017, I decided to take the next step and enroll in school and make a career out of it. 
           It has been an life-changing experience. I've learned a great deal and everything I've learned so far has only increased my desire to learn more.
           I thoroughly enjoy creating beautifully designed, fast, responsive, intuitive and functional websites and applications and can't wait to start doing it in the real world.
          <br />
          Keep scrolling to see some of my projects and learn more about me. 
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Farmer Game"
            link="https://github.com/BesianK/farmer-game"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            My first GUI/non-console based app in C# using WinForms
          </ProjectCard>
          <ProjectCard
            title="Tic Tac Toe"
            link="https://github.com/BesianK/tic-tac-toe"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            An elegant Tic Tac Toe app in WPF
          </ProjectCard>
          <ProjectCard
            title="Good Quotes"
            link="https://mcaweb.matc.edu/kodrab/160/assignment-8/index.html"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A simple JavaScript website with a few quotes
          </ProjectCard>
          <ProjectCard
            title="Product Reviews"
            link="https://mcaweb.matc.edu/kodrab/160/assignment-4/index.html"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A basic HTML/CSS product review website with JavaScript
          </ProjectCard>
          <ProjectCard
            title="Product Reviews"
            link="https://goofy-einstein-6e2c8c.netlify.com/"
            bg="linear-gradient(to right, #003973 0%, #e5e5be 100%)"
          >
            A Gatsby review site on Netlify with Contentful
          </ProjectCard>
          <ProjectCard
            title="Custom Homes"
            link="https://github.com/BesianK/Custom-Homes"
            bg="linear-gradient(to right, #fdc830 0%, #f37335 100%)"
          >
            A Java app with GUI
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Besian Kodra" />
          <AboutSub>
            In constant beta: Always learning. Committed to forever grow and evolve by remaining curious.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm skilled in Object Oriented Programming with C#. My experience includes console apps as well as some GUI apps with WPF and
          WinForms. I have a similar level of experience with C++ and Java using Visual Studio and NetBeans. 
          I have experience in client-side web development with HTML, CSS and JS, using Atom as well as server-side web development with Node.js, in VS Code to build
          React static sites mostly generated by GatsbyJS using GraphQL as a query language. Speaking of queries, I have experience with SQL relational database queries in SQL Server Management Studio. 
          Currently, I am learning ASP.NET for dynamic site building. I can't wait to start implementing what I've learned and continue to expand.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:kodrab@gmatc.matc.edu">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/KodraB">GitHub</a> and{' '}
            <a href="https://www.linkedin.com/in/besian-kodra/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 | Besian Kodra's Portfolio | <a href="https://github.com/KodraB/Portfolio">GitHub Repository</a> |
          <a href="https://www.linkedin.com/in/besian-kodra/">Besian Kodra</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

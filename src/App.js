
import React from 'react';
import './App.css';

// Components
import NavBarButton from './components/NavBarButton';
import GreetingBanner from './components/GreetingBanner';
import GreetingMessage from './components/GreetingMessage';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div>
      <div className='navBar'>
        <NavBarButton title='Greetings' section='' />
        <NavBarButton title='About Me' section='aboutSection' />
        <NavBarButton title='Projects' section='projectsSection' />
        <NavBarButton title='Contact' section='' />
      </div>
      <GreetingBanner />
      <GreetingMessage />
      <div id='aboutSection' className='section'>
        <div className='sectionHeader'>
          <h2 className='sectionHeaderText'>About Me</h2>
        </div>
        <div className='sectionContent'>
          <div className='aboutMeCardsDiv'>
            <div className='aboutMeCard'>
              <h3>My Background</h3>
              <p>I first started programming when I was in middled school, using websites such as Codecademy.</p>
              <p>My high school offered various STEM classes, and I took all the prograaming-related ones.</p>
              <p>I rediscovered my love for programming during the pandemic, and after a few months building projects on my own in my free time, I decided I wanted to develop my skills further.</p>
              <p>I completed Nucamp's Full Stack Web &#38; Mobile Development bootcamp, and am ready to apply my skills at a professinal level.</p>
              <p></p>
            </div>
            <div className='aboutMeCard'>
              <h3>My Skills</h3>
            </div>
          </div>
        </div>
      </div>
      <div id='projectsSection'>
        <div className='sectionHeader'>
          <h2 className='sectionHeaderText'>My Projects</h2>
        </div>
        <div className='sectionContent'>
          <div className='projectRow'>
            <ProjectCard title='Hour Tracker' />
            <ProjectCard title='Trainer Pal' notFirst={true} />
            <ProjectCard title='Random Quote Machine' notFirst={true} />
            <ProjectCard title='Hamilton Tribute' notFirst={true} />
          </div>
          <div className='projectRow'>
            <ProjectCard title='Avengers Careers' />
            <ProjectCard title='Deadly Austrailia' notFirst={true} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
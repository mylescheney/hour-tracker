
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
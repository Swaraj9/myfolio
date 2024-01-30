import Navbar from '@/app/components/Navbar'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar/>
      <Projects/>
      <Skills/>
      <Achievements/>
      <Education/>
    </main>
  );
}

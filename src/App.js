import './App.css';
import {About} from './components/About'
import {Header} from './components/Header'
import {Services} from './components/Services'
import {Nav} from './components/Nav'
import {Banner} from './components/Banner'
import {Work} from './components/Work'
import {Contact} from './components/Contact'
function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <About/>
      {/* <Services/> */}
      <Work/>
      <Contact/>
      <Nav/>
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;

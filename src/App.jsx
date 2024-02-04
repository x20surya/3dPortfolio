import { BrowserRouter } from 'react-router-dom';
import { Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { About } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-primary bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      <About />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App

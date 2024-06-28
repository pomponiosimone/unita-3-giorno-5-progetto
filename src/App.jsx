import React from 'react';
import TopBar from './components/TopBar';
import Section from './components/Section';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container-fluid px-4">
        <Section title="Tendenze" imageRange={[1, 6]} /> 
        <Section title="Guarda di nuovo" imageRange={[7, 12]} /> 
        <Section title="Nuove Uscite" imageRange={[13, 18]} /> 
        
        <Gallery title="Harry Potter Saga" movieIds={['tt0241527', 'tt0295297', 'tt0304141', 'tt0330373', 'tt0373889', 'tt0417741']} />
        
        <Gallery title="Transformers" movieIds={['tt0418279', 'tt1055369', 'tt1399103', 'tt0944947', 'tt2109248', 'tt3371366']} /> 
        
        <Gallery title="Avengers" movieIds={['tt0371746', 'tt0800080', 'tt1228705', 'tt0848228', 'tt2395427', 'tt4154796']} /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;

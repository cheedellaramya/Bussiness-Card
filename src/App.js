import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
   <div className='app-container'>
      <div className='app-container-one'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
   </div>
  );
}

export default App;

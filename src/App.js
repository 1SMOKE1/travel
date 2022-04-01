import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <div className='container'>
          asdfasdfsdafsdafs
          <Header />
          <Content />
        </div>
      </div>
      <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;

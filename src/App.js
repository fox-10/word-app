
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer';
import CardPage from './Components/CardPage/CardPage';
import WordPage from './Components/WordPage/WordPage';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        <WordPage/>
        <CardPage/>
    </div>
  );
}

export default App;

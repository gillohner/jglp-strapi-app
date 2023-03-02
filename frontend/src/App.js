import Header from './components/header/header';
import Overview from './pages/overview';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Overview/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

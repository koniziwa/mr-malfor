import Header from './components/Header';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import Articles from './components/Articles';
import ProductList from './components/ProductList';
import Journal from './components/Journal';
import Footer from './components/Footer';
import Overlay from './components/Overlay';


function App() {

  return (
    <>
      <Overlay />
      <Header />
      <Navigation />
      <Promo />
      <hr />
      <Articles />
      <hr />
      <ProductList />
      <hr />
      <Journal />
      <Footer />
    </>
  );
}

export default App;

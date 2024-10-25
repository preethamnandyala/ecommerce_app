
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Products from './customer/components/product/Products';
import HomePage from './customer/pages/Homepage/Homepage';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <HomePage /> */}
       <Products/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

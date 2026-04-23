import './App.css';
import './css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import Button from './components/Button';
import Button2 from './components/Button2';
import Product from './components/Product';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import TodoApp from './components/TodoApp';
import Header from './components/Header';

const product = {
  name: "Laptop",
  price: 3500,
  description: "Wydajny laptop do pracy i nauki"
};



function Home() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <Hello />
        <Hello2 />
      </div>
      <div className="row justify-content-center">
        <div className="col-sm d-flex justify-content-center">
          <Button name="btn1" label="Click me" bgColor="success" />
        </div>
        <div className="col-sm d-flex justify-content-center">
          <Button name="btn1" label="Click me" bgColor="danger" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm d-flex justify-content-center">
          <Button2 name="btn1" label="Click me" bgColor="info" />
        </div>
        <div className="col-sm d-flex justify-content-center">
          <Button2 name="btn1" label="Click me" bgColor="warning" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm mx-auto"><Counter /></div>
        <div className="col-sm mx-auto"><Counter2 /></div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container text-center">
      <div className="mx-auto">
        <Product
          name={product.name}
          price={product.price}
          description={product.description}
          srcImg="https://th.bing.com/th/id/OIP.TABlGYoUA-adhs4_vvSAsAHaE8"
        />
      </div>
    </div>
  );
}

function Todo() {
  return (
    <div className="container text-center">
      <div className="mx-auto"><TodoApp /></div>
    </div>
  );
}

function NotFound() { 
  return <h2>404 - Strona nie znaleziona</h2>; 
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
             <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
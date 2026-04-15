import './App.css';
import './css/bootstrap.min.css';

import Hello from './components/Hello';
import Hello2 from './components/Hello2';

import Button from './components/Button';
import Button2 from './components/Button2';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hello2/>
      <div className="gap-4 flex">
        <Button name="btn1" label="Click me" bgColor="success"/> 
        <Button name="btn1" label="Click me" bgColor="danger"/>
        <Button2 name="btn1" label="Click me" bgColor="info"/>
        <Button2 name="btn1" label="Click me" bgColor="warning"/>
      </div>
      

    </div>
  );
}

export default App;

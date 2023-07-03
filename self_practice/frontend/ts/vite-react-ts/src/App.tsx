import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [push, setPush] = useState(false); // need a state

  return (
  <>
    {push ? <Alert onClose={() => setPush(false)}>Alert!</Alert> : <></>} 
    <Button onClick={() => setPush(true)}>Button</Button>
  </>
  );
}
export default App;

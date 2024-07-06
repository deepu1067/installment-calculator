import './App.css';
import Form from './components/form_component';
import {useState } from 'react';
import Display from './components/display';


function App() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [formdata, setFormdata] = useState({})


  const handleformdata = (data) => {
    setFormdata(data)
  }

  return (
    <main>
      <div className='container p-3'>
        <h1 className='text-center'>Installment Calculator</h1>
        <Form handleformdata={handleformdata} setisSubmitted={setisSubmitted} />
        <div className='line'></div>
        {isSubmitted ? <Display formdata={formdata} isSubmitted={isSubmitted} /> : null}

        {/* <Display formdata={formdata} isSubmitted={isSubmitted} /> */}
      </div>
    </main>
  );
}

export default App;

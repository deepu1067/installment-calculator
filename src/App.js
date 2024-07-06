import './App.css';
import favicon from './favicon.svg';
import Form from './components/form_component';
import { useEffect, useState } from 'react';
import Display from './components/display';


function App() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [formdata, setFormdata] = useState({})

  useEffect(() => {
    document.title = "Installment Calculator";
    // document.head.innerHTML = '<link rel="icon" href="' + favicon + '" type="image/svg+xml" />'
    var link = document.querySelector("link[rel~='icon']");
    if (link) {
      // If the existing favicon link element is found, remove it
      link.parentNode.removeChild(link);
    }
    link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    link.type = 'image/svg+xml';

    document.head.appendChild(link);

  }, [])

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

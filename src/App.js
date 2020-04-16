import React, {
  lazy,
  Suspense,
  useState,
} from 'react';

import { MoonLoader } from 'react-spinners';

//import Image from './components/image';
// Code Splitting - Importación dinámica
const Image = lazy(() => import('./components/image'));

const App = () => {
  const [show, setShow] = useState(false);
  const toogle = () => setShow(!show);
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };

  return (
    <div style={styles}>
      <button onClick={toogle}>
        {show ? 'Ocultar' : 'Mostrar'}
      </button>
      {show && (
        <Suspense fallback={<MoonLoader color="orangered" />}>
          <Image />
        </Suspense>
      )}
    </div>
  )
}

export default App

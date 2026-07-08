import Header from '../src/components/header'
import Body from './components/body'
import { useNavigate } from 'react-router-dom';

import './App.css'

function App() {
  const navigate = useNavigate();

  // Esta función es la buena, manda al usuario a la nueva ruta
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Dejamos un ÚNICO Header y le pasamos la navegación */}
      <Header onLoginClick={handleLoginClick} />
      
      <div className='bg-[#f1f5f9] min-h-screen'>
        <div className='mb-4'>
          {/* Quitamos la propiedad showLogin que ya no existe */}
          <Body /> 
        </div>
      </div>
    </>
  )
}

export default App
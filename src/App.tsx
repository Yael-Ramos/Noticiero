import Header from '../src/components/header'
import Body from './components/body'
import { useNavigate } from 'react-router-dom';

import './App.css'

function App() {
  const navigate = useNavigate();


  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
  
      <Header onLoginClick={handleLoginClick} />
      
      <div className='bg-[#f1f5f9] min-h-screen'>
        <div className='mb-4'>

          <Body /> 
        </div>
      </div>
    </>
  )
}

export default App
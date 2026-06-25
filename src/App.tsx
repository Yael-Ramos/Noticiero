import { useState } from 'react';
import Header from '../src/components/header'
import Body from './components/body'

import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Mantenemos el fondo de toda la pantalla */}
      <div className='bg-[#f1f5f9] min-h-screen'>
        
        {/* EL TRUCO: Si estamos en Login no hay margen (''). Si vemos noticias, aplicamos tu margen original ('mb-4') */}
        <div className={showLogin ? '' : 'mb-4'}>
          <Header onLoginClick={() => setShowLogin(!showLogin)} />
        </div>

        <div>
          <Body showLogin={showLogin} />
        </div>
        
      </div>
    </>
  )
}

export default App
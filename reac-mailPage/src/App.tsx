import './App.css'

import NeutraLogo from './assets/NeutraLogo.svg'
import Card from './components/Card/Card'

function App() {
  

  return (
    <div className='app'>
      <div className="head">
        <img src={NeutraLogo} alt="" />
        Neutra+
      </div>
      <Card />
      <div className="contact">
        
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
import './App.css'
import Header from './components/page1/header'
import Left from './components/page1/left'
import Right from './components/page1/right'
import WholePage from './components/page1/wholepage'
import WholePage2 from './components/page2/wholepage2'


function App() {
  return (
    <div className="scroll-container">
     
      <WholePage />

      
      <WholePage2 />
    </div>
  )
}

export default App
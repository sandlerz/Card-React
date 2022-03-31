import ReactDOM from 'react-dom'

import './index.css'

import Info from './components/Info'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return(
    <main>
      <Info />
      <About />
      <Footer />
    </main>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
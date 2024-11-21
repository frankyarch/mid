import Body from './components/body'
import Footer from './components/footer'
import Main from './components/main/main'
import Section1 from './components/section1'
import Section2 from './components/section2'
import './assets/js/script'
import './assets/css/style.css'
import Header from './components/header'

function App() {

  return (
    <>
      <div>
        <Header />
       <Body />
       <Main />
       <Section1 />
       <Section2 />
       <Footer />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

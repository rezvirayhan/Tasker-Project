import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import HeroSection from './Pages/HeroSection'
import TaskBoard from './Pages/Task/TaskBoard'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex flex-col justify-center items-center'>
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

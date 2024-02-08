import './App.css'
import Photo from './Photo'
import Title from './Title'
import Skills from './Skills'

function App() {

  return (
    <div className='container'>
      <Photo photoName='fatih.jpg' />
      <Title title='Fatih' />
      <Skills />
    </div>
  )
}

export default App

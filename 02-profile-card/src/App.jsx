import './App.css'
import Photo from './Photo'
import Title from './Title'
import Skills from './Skills'

function App() {

  return (
    <div className='container'>
      <Photo photoName='fatih.jpg' />
      <Title title='Fatih' />
      <div>
        <Skills className='skill1' skill='JavaScript'/>
        <Skills className='skill2' skill='React'/>
      </div>
    </div>
  )
}

export default App

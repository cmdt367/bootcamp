import { useState } from 'react'
import { CV } from './cv/cv'
import './App.css'
import { About, Education, Experience, Hero, More } from './components/indexImport'
import Header from './components/Header/Header'

//Importamos el objeto de nuestro CV. Al ser un objeto de: objetos y array de objetos, podemos hacer destructuring para quedarnos con los
//principales campos de interes del cv, como son los datos personales(hero), la educacion o la experiencia.

const {hero, education, experience, languages, habilities, volunteer} = CV


function App() {
  const [showEducation, setShowEducation] = useState(true)

  return (
    <>
    <Header/>
    <main>
     <Hero hero={hero}/>
     <About hero={hero}/>
     <div className="divBtn">
     <button className="btnCambiar" onClick={()=>setShowEducation(true)}>EDUCATION</button>
     <button className="btnCambiar" onClick={()=>setShowEducation(false)}>EXPERIENCE</button>
     </div>
     {showEducation ? <Education education={education}/> :<Experience experience={experience}/> }
     
     
     <More languages={languages} habilities={habilities} volunteer={volunteer}/>
     </main>
    </>
  )
}

export default App
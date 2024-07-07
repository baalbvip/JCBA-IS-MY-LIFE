import { useState } from 'react'
import Index from './Pages/Index'
import "./Styles.scss"
import $ from "jquery"
import Intro from './Pages/Intro'
import Conocimos from './Pages/Conocimos'
import Enamore from './Pages/Enamore'
import PrimerKiss from './Pages/PrimerKiss'
import Comenzo from './Pages/Comenzo'
import Album1 from './Pages/Album1'
import Reencuentro from './Pages/Reencuentro'
import Reencuentro2 from './Pages/Reencuentro2'
import Cancion from './Pages/Cancion'
import Contigo from './Pages/Contigo'
import Metas from './Pages/Metas'
import Album2 from './Pages/Album2'
import Quieres from './Pages/Quieres'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [pqereasi, setpqereasi] = useState(false)

  function nextPage() {
    setPage(page + 1)
  }

  function goSoundMagic() {
    document.querySelector("#magic-audio").play()
  }

  function goSoundAhh() {
    document.querySelector("#aah-audio").play()

  }

  function goSoundMirarte() {
    document.querySelector("#mirarte-audio").play()
  }

  function goSoundConverti() {
    document.querySelector("#converti-audio").play()
  }

  function stopSoundMirarte() {
    document.querySelector("#mirarte-audio").pause()

  }

  function stopSoundConverti() {
    document.querySelector("#converti-audio").pause()

  }

  function showPqEreAsi() {
    setpqereasi(true)
    goSoundAhh()
  }


  return (
    <>
      {page == 0 ? <Index nextPage={nextPage} goSoundMagic={goSoundMagic} showPqEreAsi={showPqEreAsi} /> : ''}
      {page == 1 ? <Intro goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 2 ? <Conocimos goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 3 ? <Enamore goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 4 ? <PrimerKiss goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 5 ? <Comenzo goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 6 ? <Album1 goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 7 ? <Reencuentro goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 8 ? <Reencuentro2 goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 8 ? <Reencuentro2 goSoundMirarte={goSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 9 ? <Cancion stopSoundMirarte={stopSoundMirarte} nextPage={nextPage} /> : ''}
      {page == 10 ? <Contigo goSoundConverti={goSoundConverti} nextPage={nextPage} /> : ''}
      {page == 11 ? <Metas goSoundConverti={goSoundConverti} nextPage={nextPage} /> : ''}
      {page == 12 ? <Album2 goSoundConverti={goSoundConverti} nextPage={nextPage} /> : ''}
      {page == 13 ? <Quieres goSoundConverti={goSoundConverti} nextPage={nextPage} /> : ''}


      {pqereasi ?
        <div className="pq-ereasi">
          <div className="center">
            <img src="img/pq-ereasi.png" alt="" />
            <button onClick={(ev) => { setpqereasi(false) }}>Volver a intentarlo</button>
          </div>
        </div>
        : ''}


      <audio id="magic-audio" src="/effects/magic.mp3" hidden preload='auto'></audio>
      <audio id="aah-audio" src="/effects/grito.mp3" hidden preload='auto'></audio>
      <audio id="mirarte-audio" src="/effects/mirarte.mp3" hidden preload='auto'></audio>
      <audio id="converti-audio" src="/effects/converti.mp3" hidden preload='auto'></audio>

    </>
  )
}

export default App

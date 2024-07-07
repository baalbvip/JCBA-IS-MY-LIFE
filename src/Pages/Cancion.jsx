import { useEffect } from "react"
import $ from "jquery"
export default function Cancion({ stopSoundMirarte, nextPage }) {

    useEffect(() => {
        stopSoundMirarte()
        $("#converti").get(0).play()
    }, [])



    return (
        <>
            <div className="background-2 reencuentroblur"></div>
            <div className="case">
                <p>La cancion que te dedique cuando nos vimos de nuevo.</p>

                <span>Fue una cancion que salio de mi corazon, por que cuenta basicamente lo que sucedio cuando llegastes a mi de nuevo.</span>
                <br />
                <br />
                <center><audio id="converti" src="/effects/converti.mp3" controls></audio></center>

                <span>
                    Eres una angel que llego a mi vida nuevamente, que esta vez no quiero dejar ir, o perderlo. Te amo demasiado Jhojeiny Betancourt. Esto lo hago con mucho amor.
                </span>
                <div className="buttons">
                    <button onClick={nextPage}>Te amo... Sigue..</button>
                </div>
            </div>
        </>
    )
}
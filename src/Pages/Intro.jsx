import { useEffect } from "react"

export default function Intro({ goSoundMirarte, nextPage }) {

    useEffect(() => {
        goSoundMirarte()
    }, [])

    return (<>

        <div className="background-2 love"></div>
        <div className="case">
        <img src="/img/heart-with-arrow_1f498.png" alt="" />

            <p>Introduccion</p>
            <ul>
                <li>Como nos conocimos ?</li>
                <li>Como me enamore de ti</li>
                <li>Nuestro primer beso.</li>
                <li>Como empezo nuestra relacion ?</li>
                <li>El rencuentro</li> 
                <li>Musicas que te dedique</li>
                <li>Por que quiero estar contigo?</li>
                <li>Mis planes contigo</li>
            </ul>

            <div className="buttons">
                <button onClick={nextPage}>Seguir...</button>
            </div>
        </div>
    </>)
}
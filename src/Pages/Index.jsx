import { useEffect, useState } from "react"

export default function Index({ goSoundMagic, showPqEreAsi, nextPage }) {

    const [letter, setLetter] = useState("Espera un momento...")
    const labels = ['Cargando la panda historia...', 'Se viene un pandimomento...', 'Estamos en proceso...', 'Dame un momento pandita..', 'HMMM un poco mas', 'Tu me quieres?', 'Cuanto me quieres?', 'Nunca te fallare...', 'Confia en mi...']
    let letterPosition = 0
    let activeEffect = false
    const [displayLoading, setDisplay] = useState("block")
    const [loadEffect, setLoadEffect] = useState(false)
    const [visible, setVisible] = useState(true)

    useEffect(() => {

        setLoadEffect(true)

        if (loadEffect && activeEffect == false) {
            activeEffect = true
            setInterval(() => {

                if (letterPosition >= labels.length) {
                    letterPosition = 0
                }

                setLetter(labels[letterPosition++])
            }, 2500)

            setTimeout(() => {
                setVisible(false)

                setTimeout(() => {
                    setDisplay("none")
                }, 1500)
            }, 20500)
        }

    }, [loadEffect])

    function next() {
        goSoundMagic()
        nextPage()
    }




    return (
        <>
            <div className={`loading-panda ${visible ? 'open' : 'closed'}`} style={{ display: displayLoading }}>
                <div className="background-loading"></div>
                <img src="/img/icon-panda.png" alt="" />
                <p>{letter}</p>
            </div>


            <div className="case">
                <img src="/img/heart-with-arrow_1f498.png" alt="" />
                <p>El comienzo de nuestra historia...</p>
                <span>Hola espero estes preparada, para leer toda nuestra historia desde nuestro principio numero "0"</span>

                <div className="buttons">
                    <button onClick={showPqEreAsi}>Ay no!</button>
                    <button onClick={next}>Estoy Preparada</button>
                </div>
            </div>
        </>
    )
}
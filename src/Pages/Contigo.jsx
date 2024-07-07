import { useEffect } from "react"

export default function Contigo({ goSoundConverti, nextPage }) {

    useEffect(() => {
        goSoundConverti()
    }, [])
    return (
        <>        <div className="background-2 love"></div>

            <div className="case">
                <p>Por que quiero estar contigo?</p>
                <span>Jhoje... Como siempre te lo he expresado, contigo me siento muy comodo en todos los sentidos. Estar contigo es algo que no cambiaria por nada.

                    Pasar tiempo a tu lado para mi es muy valioso, tenerte en mi vida para mi es muy valioso.

                    <br />
                    <br />
                    Como te explique, mis sentimientos por ti nunca se fueron, simplemente se congelaron. Por eso sigo siendo la misma persona contigo de la que fui antes y hasta mejor, eres diferente, eres una mujer con visiones claras, eres una persona que trabaja conmigo junto a la relacion para que fluyan las cosas te amoldas y te adaptas a cosas para que fluyan tal cual como yo lo hago, esas son cosas que se valoran, no eres egoista!, piensas en ti y en mi. Eres tu, la persona que quiero a mi lado. Eres oro para este 2023
                </span>
                <div className="buttons">
                    <button onClick={nextPage}>Siguiente, siempre te amare.</button>
                </div>
            </div>
        </>
    )
}
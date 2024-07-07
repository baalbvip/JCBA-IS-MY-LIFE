export default function Reencuentro({ nextPage }) {

    return (
        <>        <div className="background-2 love"></div>

            <div className="case">

                <p>Nuestro reencuentro (2023)!</p>

                <span>Fue algo hermoso, volver a hablar contigo, escucharnos, contarnos nuestas vidas, hablar mucho pero mucho, algo que me hacia mucha falta
                    de ti, como dije atras, siempre hemos tenido muy buena conexion, en muchas cosas, y todo fue tan espontaneo y tan natural, que pareciera que entre nosotros no hubiera pasado ninguna separacion o algo asi.

                    <br />
                    <br />
                    Simplemente, seguiamos comunicandonos como siempre, ese dia te lleve a comer, a un lugar en caracas, Arroz Chino, y te presenta a pablito, recuerdo lo hermoso que te veias en la mesa. Esos ojos tan brillantes y preciosos.
                </span>
                <div className="buttons">
                    <button onClick={nextPage}>Siguiente (parte 2)...</button>
                </div>
            </div>
        </>
    )
}
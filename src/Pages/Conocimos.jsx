export default function Conocimos({ nextPage }) {

    return (
        <>        <div className="background-2 love"></div>

            <div className="case">
                <img src="https://lawiya.files.wordpress.com/2010/12/pareja-besandose-4.png" alt="" />
                <p>Como nos conocimos?</p>
                <span>
                    Cuando nos conocimos fue algo muy loco, fue por una tercera persona, esta persona queria intentar algo contigo.
                    Y cuando te conoci fue algo muy raro, me gustastes a la primera, me llamastes la antencion, intente concedir contigo de nuevo
                    te envie una solicitud por <b>facebook</b> y empezamos a hablar muchas cosas, nuestra conexion fue rapida, siempre hemos tendio una conexion
                    bastante rapida
                    <br />
                    <br />

                    Luego planeamos conocermos mas, en persona, fue cuando nos empezamos a ver, y empezo a fluir todo de una manera totalmente diferente.
                    Ya no era tan solo una amistad, era algo que ambos sentiamos, mas alla de ser amigos.
                    Fue cada vez incrementado esos sentimientos entre nosotros hasta llegar al siguiente punto.
                </span>

                <div className="buttons">
                    <button onClick={nextPage}>Siguiente...</button>
                </div>
            </div>
        </>
    )
}
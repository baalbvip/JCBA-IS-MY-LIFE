export default function Album1({ nextPage }) {

    return (
        <>

            <div className="background-2 love"></div>

            <div className="case">

                <p>Nuestras fotos...</p>
                <span>Estas son fotos de nuestra relacion pasada, donde ambos la pasamos bastante bien.. Donde aprendimos cosas juntos, para no volver a cometer en nuestra relacion actual. Es un recuerdo inolvidable, que siempre llevaremos junto a nosotros.</span>

                <br />
                <br />

                <div className="album">
                    <img src="/img/foto2.jpg" alt="" />
                </div>

                <div className="buttons">
                    <button onClick={nextPage}>Siguiente...</button>
                </div>
            </div>
        </>
    )
}
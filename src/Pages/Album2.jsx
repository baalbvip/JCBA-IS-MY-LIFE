export default function Album2({ nextPage }) {

    return (
        <>
        <div className="background-2 love"></div>

            <div className="case">
                <p>Nuestra primera foto juntos...</p>
                <span>Valoro cada momento a tu lado, lo disfruto como que si no hubiera un tomorrow, eres la mujer de mi vida</span>
                <br />
                <div className="album">
                    <img style={{ maxHeight: "400px" }} src="/img/reencuentro.jpg" alt="" />
                </div>
                <div className="buttons">
                    <button onClick={nextPage}>Siguiente</button>
                </div>
            </div>
        </>
    )
}
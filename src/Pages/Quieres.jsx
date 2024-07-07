import { useState } from "react"

export default function Quieres() {
    const [position, setPosition] = useState({ left: "auto", top: "auto" })
    const [active, setActive] = useState(false)
    const [positionNow, setPositionNow] = useState(0) // Agregamos el estado para positionNow
    const [intents, setIntents] = useState(0)

    const positions = [
        { left: "2vw", top: "5vh" },
        { left: "50vw", top: "30vh" },
        { left: "80vw", top: "50vh" },
        { left: "25vw", top: "30vh" }
    ];

    function nono() {

        if (intents >= 3) {
            window.location.href = "https://api.whatsapp.com/send?phone=5804125400396&text=Javier%20dijo%20que%20no%20queria%20seguir%20siendo%20tu%20pandi%20esposa%20y%20ahora?"
        }
        setActive(true);
        setIntents(prevData => (prevData + 1))
        const newPosition = (positionNow + 1) % positions.length;

        setPositionNow(newPosition); // Actualizamos el estado de positionNow

        console.log(newPosition);

        setPosition(positions[newPosition]);
    }

    return (
        <>
            <div className="background-2 reencuentro"></div>
            <div className="game">
                <div className="center">
                    <p>Quieres seguir siendo mi pandiesposa?</p>
                    {intents ?
                        <span>Hey como que no si le das que no <br /> 3 veces le dire a javier... (intento: {intents}) </span> : ''}
                    <div className="options">
                        <button
                            onClick={nono}
                            style={{
                                left: position.left,
                                top: position.top,
                                position: active ? "fixed" : "relative"
                            }}
                        >
                            No
                        </button>
                        <button
                            onClick={() => {
                                window.location.href =
                                    "https://api.whatsapp.com/send?phone=5804125400396&text=Acepte%20ser%20tu%20novia%20nuevamente%20javier,%20mejor%20dicho%20tu%20esposa%20te%20quiero.";
                            }}
                        >
                            Si
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

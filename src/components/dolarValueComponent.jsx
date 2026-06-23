import { useEffect, useState } from "react";
import "./dolarValueComponent.css";

function DolarValueComponent() {
    const [tasa, setTasa] = useState([]);

    useEffect(() => {
        const obtenerTasa = async () => {
            try {
                const respuesta = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
                const data = await respuesta.json();
                
                console.log(data)
                
                setTasa([data]);
    
            } catch (error) {
                console.log("Error al conectar con la API");
            }
        }

        obtenerTasa()
    }, [])

    return (
        <div className="tasa-div">
            <h2 className="title-tasa">Tasa de dólar oficial:</h2>
           
            {tasa.map((tasaValue, index) => (
                <>
                    <p className="p-tasa-value">Bs. {tasaValue.promedio}</p>
                    <p>{tasaValue.fechaActualizacion}</p>
                </>
            ))}
        </div>
    )
}

export default DolarValueComponent;
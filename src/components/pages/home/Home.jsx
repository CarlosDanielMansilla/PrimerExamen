import Formulario from "../../common/formulario/Formulario";
import { useState } from "react";
import Card from "../../common/formulario/card/Card";

const Home = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    direccion: "",
    pelicula: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div>
      <Formulario
        setEnviado={setEnviado}
        setError={setError}
        datos={datos}
        setDatos={setDatos}
      ></Formulario>
      {enviado && <Card datos={datos}></Card>}
      {error && (
        <h3 style={{ color: "red" }}>
          Por favor chequea que la información sea correcta
        </h3>
      )}
    </div>
  );
};

export default Home;

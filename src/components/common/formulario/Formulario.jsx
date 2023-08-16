import PropTypes from "prop-types";

const Formulario = ({ setEnviado, setError, datos, setDatos }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (datos.nombre.length > 3 && datos.direccion.length > 6) {
      setEnviado(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 2px black",
        width: 300,
        margin: "auto",
        marginTop: 150,
      }}
    >
      <label htmlFor="">Ingrese su Nombre</label>
      <input
        type="text"
        onChange={(event) => setDatos({ ...datos, nombre: event.target.value })}
      />
      <label htmlFor="">Ingrese su Direccion</label>
      <input
        type="text"
        onChange={(event) =>
          setDatos({ ...datos, direccion: event.target.value })
        }
      />
      <label htmlFor="">Ingrese su pelicula favorita</label>
      <input
        type="text"
        onChange={(event) =>
          setDatos({ ...datos, pelicula: event.target.value })
        }
      />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
};

Formulario.propTypes = {
  setEnviado: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  datos: PropTypes.object.isRequired,
  setDatos: PropTypes.func.isRequired,
};

export default Formulario;

import PropTypes from "prop-types";

const Card = ({ datos }) => {
  return (
    <div
      style={{
        border: "solid 2px green",
        width: 300,
        margin: "auto",
        marginTop: 50,
        padding: 10,
        textAlign: "center",
      }}
    >
      <h2>Hola {datos.nombre}</h2>
      <h3>Tu direccion: {datos.direccion}</h3>
      <h3 style={{ backgroundColor: "#ADC4CE", padding: 10, borderRadius: 5 }}>
        Tu pelicula favorita es: {datos.pelicula}
      </h3>
    </div>
  );
};

Card.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Card;

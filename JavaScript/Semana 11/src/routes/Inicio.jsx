

const Inicio = () => {
  // Establece el estilo del contenedor principal con flexbox
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  };

  // Establece el estilo de la imagen de fondo
  const backgroundStyle = {
    backgroundImage: `url("src/assets/img/Fondo UTN San Rafael.jpg")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100%",
    flex: "1", // Haz que la imagen de fondo sea flexible
    backgroundRepeat: "no-repeat", // Evita la repetición de la imagen
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}>
      </div>
    </div>
  );
};

export default Inicio;

import freeCodeCampLogo from '../images/freecodecamp-logo.png'

const LogoFreeCodeCamp = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="logo de freecodecamp"
      />
    </div>
  );
};

export default LogoFreeCodeCamp;

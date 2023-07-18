/* eslint-disable react/prop-types */
import IconoNuevoGasto from "../img/nuevo-gasto.svg";

const Add = ({handleNuevoGasto}) => {


  return (
    <div className="nuevo-gasto">
      {/* Icono de agregar */}
      <img src={IconoNuevoGasto} alt="nuevo gasto" onClick={handleNuevoGasto}/>
    </div>
  );
};

export default Add;

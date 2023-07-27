/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar
}) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("")
  const [id, setId] = useState("");

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombreGasto(gastoEditar.nombreGasto);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setMensaje(gastoEditar.mensaje);
      setId(gastoEditar.id)
      setFecha(gastoEditar.fecha)
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})

    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombreGasto, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGasto({ nombreGasto, cantidad, categoria, id, fecha });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>
          {gastoEditar.nombreGasto ? "Editar Gasto" : "Nuevo Gasto"}
        </legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        {/* NombreGasto */}
        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
            id="nombre"
            type="text"
            placeholder="Añade aqui tu gasto!"
          />
        </div>
        {/* Cantidad */}
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            id="cantidad"
            type="number"
            placeholder="Añade aqui la cantidad $$"
          />
        </div>
        {/* Categoria */}
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            id="categoria"
          >
            <option value=""> -- Seleccione -- </option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comida </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios </option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
          </select>
        </div>
        {/* Boton */}
        <input
          type="submit"
          value={gastoEditar.nombreGasto ? "Guardar cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;

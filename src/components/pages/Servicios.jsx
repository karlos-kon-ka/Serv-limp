import { useState } from 'react';
import { FaMapMarkerAlt, FaCity, FaHome } from 'react-icons/fa'; // Importa íconos

const trabajos = [
  { tipo: "oficina", precio: 15.00 }, 
  { tipo: "hogar", precio: 10.00 },
  { tipo: "tienda", precio: 12.00 },
];

const calculoPrecio = (preciobase) => {
  return (1000 * Math.pow(preciobase, 2)).toFixed(2);
}

function Servicios() {
  const [precio, setPrecio] = useState(null);
  const [seleccionado, setSeleccionado] = useState(false);

  const handleSelectChange = (event) => {
    const selectedTrabajo = trabajos.find(trabajo => trabajo.tipo === event.target.value);
    setPrecio(selectedTrabajo.precio);
    setSeleccionado(true);
  }

  return (
    <section className="servicios">
      <div>
        <h2>Servicios</h2>
        <div>
          <p>
            Disponemos de tipos de servicios según su necesidad. <br />
            Adaptándonos al tipo de servicio que usted necesita.
          </p>
        </div>
      </div>

      <div className="presupuesto">
        <h3>Presupuesto</h3>
        <div>
          <label htmlFor="trabajo-select">Seleccione el tipo de servicio:</label>
          <select id="trabajo-select" onChange={handleSelectChange}>
            <option value="" disabled selected>Seleccione un servicio</option>
            {trabajos.map(trabajo => (
              <option key={trabajo.tipo} value={trabajo.tipo}>
                {trabajo.tipo.charAt(0).toUpperCase() + trabajo.tipo.slice(1)}
              </option>
            ))}
          </select>
          {seleccionado && (
            <>
              <p>Precio base: {precio} euros</p>
              
            </>
          )}
        </div>
      </div>

      <section className="disposicion">
        <h3>Nos desplazamos por Murcia y alrededores</h3>
        <div className="info-geografica">
          <div className="icono">
            <FaCity />
            <p>Murcia Capital</p>
          </div>
          <div className="icono">
            <FaMapMarkerAlt />
            <p>Pedanías cercanas</p>
          </div>
          <div className="icono">
            <FaHome />
            <p>Otras localidades</p>
          </div>
          <div className="mapa">
            <img src="/img/mur.png" alt="Mapa de Murcia" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Servicios;

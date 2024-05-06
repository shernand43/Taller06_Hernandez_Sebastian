import { useState } from "react";
import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULA } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";
export const PeliListado = () => {

const [arrPelicula] = useState<Pelicula[]>(ARREGLO_PELICULA);

const obtenerNombreGenero =(valor:string)=>{
  for (const objGen of  ARREGLO_PELICULA_GENERO) {
    if (objGen.codGenero == valor) {
      return objGen.nombreGenero;
    }
  }
};

    
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-11 mt-4">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="table-danger">
                  <th style={{ width: "10%" }}>Nro</th>
                  <th style={{ width: "30%" }}>Nombre</th>
                  <th style={{ width: "20%" }}>Genero</th>
                  <th style={{ width: "30%" }}>Protagonista</th>
                  <th style={{ width: "10%" }}> </th>
                </tr>
              </thead>
              <tbody>
              {arrPelicula.map((miPeli: Pelicula) => (
                <tr className="align-middle" key={miPeli.codPelicula}>
                  <td>{miPeli.codPelicula}</td>
                  <td>{miPeli.nombrePelicula}</td>
                  <td>{obtenerNombreGenero(miPeli.codGeneroPelicula)}</td>
                  <td>{miPeli.protagonistaPelicula}</td>
                  <td>
                    <img src={miPeli.imagenPeliculaBase64} alt="" className="imagenListado"/>
                    <div className="text-info">{miPeli.imagenPelicula}</div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  
import { useParams } from "react-router-dom";
import integrantesData from "../data/integrantes.json";
import IntegranteNav from "./IntegranteNav";
import IntegranteHeader from "./IntegranteHeader";
import IntegranteContent from "./IntegranteContent";
import IntegranteFooter from "./IntegranteFooter";
import "../styles/gregorykarta.css";
import "../styles/erwinschrodinger.css";
import "../styles/jacksmith.css";
import "../styles/lolasparrow.css";
import "../styles/carlosharddrive.css";

const Integrante = () => {
  const { id } = useParams();
  const integrante = integrantesData.find((i) => i.id === parseInt(id));

  if (!integrante) {
    return <h2>Integrante no encontrado...</h2>;
  }

  return (
    <div className={integrante.className}>
      <IntegranteNav />

      <IntegranteHeader
        nombre={integrante.nombre}
        subtitulo={integrante.subtitulo}
      />

      <IntegranteContent
        nombre={integrante.nombre}
        fotoPerfil={integrante.fotoPerfil}
        presentacion={integrante.presentacion}
        habilidades={integrante.habilidades}
        peliculas={integrante.peliculas}
        discos={integrante.discos}
        contacto={integrante.contacto}
      />

      <IntegranteFooter nombre={integrante.nombre} />
    </div>
  );
};

export default Integrante;


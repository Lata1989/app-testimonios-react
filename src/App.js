// import logo from './logo.svg';
import './App.css';

// Importacion de componentes
import { Testimonio } from './components/testimonio/Testimonio';


const testimonios = [
  {
    nombre: 'Gizmo',
    pais: 'Ciudad Vertedero',
    imagen: 'gizmo',
    cargo: 'Dueño',
    empresa: 'Casino de Ciudad Vertedero',
    testimonio: (
      <>
        <strong>Gizmo es un hombre obeso y manipulador,</strong> dueño del casino en la parte oeste de Ciudad Vertedero.
        Es el líder de la parte ilegal de la ciudad por lo que la seguridad liderada por Killian Darkwater lo investiga,
        pero por el momento no tienen pruebas de sus acciones. Desde que Killian le investiga ha intentado borrarlo del mapa, sin éxito.
        Para que los guardias no tengan pruebas a menudo hace que los Kalaveras hagan el trabajo sucio gracias al trato que estos tienen con Killian.
      </>
    ),
  },
  {
    nombre: 'Butch',
    pais: 'Ciudad del Eje',
    imagen: 'butch',
    cargo: 'Propietario',
    empresa: 'Comerciantes de Ultramar',
    testimonio: (
      <>
        <strong>Butch tiene grandes sueños, pero está amargado, frustrado y también es algo cobarde.</strong> Cuando Butch cree que está en la cima de las cosas, se pavonea un poco y exhibe una arrogante y bulliciosa confianza en sí mismo. Sin embargo, cuando las cosas van mal, tiende a perder el control, habla alto y rápido y no consigue hacer gran cosa. Todo el trabajo organizativo y administrativo de las caravanas lo realiza Rutger, su ayudante. Butch no es tan inteligente, y los últimos acontecimientos le han dejado un poco paranoico, porque los Comerciantes de Ultramar han sufrido más de un golpe por parte de la misteriosa fuerza que ataca las caravanas del Eje.
      </>
    ),
  },
  {
    nombre: 'Aradesh',
    pais: 'Arenas Sombrias',
    imagen: 'aradesh',
    cargo: 'Lider',
    empresa: 'Republica Nueva California',
    testimonio: (
      <>
        <strong>Aradesh era originalmente un habitante del Refugio 15,</strong> superpoblado y étnicamente diverso, ubicado al este del Refugio 13. Si bien el Refugio funcionó más o menos como se anunciaba, los conflictos internos llevaron a un cisma en el que varios grupos abandonaron el Refugio. Varios de estos grupos se convirtieron en piratas, como los Khans, y los pocos habitantes restantes del Refugio 15 finalmente fueron atacados y obligados a huir.
      </>
    ),
  },
];

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Testimonios de personas en Fall Out</h1>
        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            pais={testimonio.pais}
            imagen={testimonio.imagen}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
      {/* Hasta aca los componentes */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

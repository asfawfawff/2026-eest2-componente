import Mapa from './mapa.jsx'
import Alumno from './Alumno.tsx';


export const App = () => {
  return (
    <>
    <Alumno
     nombre="Mario" 
     edad={"20"} 
     curso="6º 2" />
<hr />

      <Mapa />
    </>
  );
}; export default App;
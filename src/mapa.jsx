const Mapa= () => {
 const alumnos = [
    "Mario",
    "Nicolas",
    "Tomas",
    "Camila"
 ]
 return (
<>
 {alumnos.map((alumno)=> (
 <p>el alumno es {alumno} </p>
 ))}
 
</>



 );
}; export  default Mapa;
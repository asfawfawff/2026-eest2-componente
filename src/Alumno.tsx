 interface Props {
    nombre: string;
    edad: number;
    curso: string;
 }

const  Alumno = ({ nombre, edad, curso}: Props) => {

    return (
        <>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Curso: {curso}</p>
    

        </>
    );

} ; export default Alumno;
import Router from "./Router/Router";

function App() {
  return <Router />;
}

export default App;

// const [nombre, setNombre] = useState('');
// const [apellido, setApellido] = useState('');
// const [correo, setCorreo] = useState('');
// const [asunto, setAsunto] = useState('');
// const [consulta, setConsulta] = useState('');

// const enviarConsulta = () => {
//   Axios.post("http://localhost:3001/api/insert", {
//     _nombre: nombre,
//     _apellido: apellido,
//     _correo: correo,
//     _asunto: asunto,
//     _consulta: consulta
//   }).then( () => {
//     alert('Gracias por enviar su consulta.');
//   })
// };

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { doc } from 'firebase/firestore';

function ChartComponent(props) {
    function generarArrayIncremental(array) {
        // Crear un nuevo array con la misma longitud que el array de entrada
        return Array.from({ length: array.length }, (_, index) => index + 1);
      }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );

    console.log(props.docData);


    const options = {
        responsive: true,
       
      };
      
      // Etiquetas para el eje X
      
       const labels = generarArrayIncremental(props.docData);
      
       const data = {
        labels,
        datasets: [
          {
            fill: true, // Si rellena o no el area de abajo
            label: 'Dataset 2', // Nombre del set
            data: props.docData, // Datos
            borderColor: 'rgb(53, 162, 235)', // esto lo puedo quitar y escoge otro color por default
            backgroundColor: 'rgba(53, 162, 235, 0.5)', // tambien puedo quitarlo o cambiarlo
          },
        ],
      };
   
    return ( 
    <>
    <h1>ChartComponent</h1>
   
    <>
       <Line options={options} data={data} />; 
      </>
    
    </> );
}

export default ChartComponent;

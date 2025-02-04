
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

function GraphsComponent({
  dataProps,
  labelsProps,
}: {
  dataProps: number[],
  labelsProps: string[]
}) {

// Registro de los plugins de Chart.js
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

// Opciones del gráfico
 const options = {
  responsive: true,
 
};

// Etiquetas para el eje X

 const labels = labelsProps;

 const data = {
  labels,
  datasets: [
    {
      fill: true, // Si rellena o no el area de abajo
      label: 'Dataset 2', // Nombre del set
      data: dataProps, // Datos
      borderColor: 'rgb(53, 162, 235)', // esto lo puedo quitar y escoge otro color por default
      backgroundColor: 'rgba(53, 162, 235, 0.5)', // tambien puedo quitarlo o cambiarlo
    },
  ],
};
console.log(labels,data.datasets[0].data);
 

    return (
      <>
       <Line options={options} data={data} />; 
      </>
    )
  }
  
  export default GraphsComponent
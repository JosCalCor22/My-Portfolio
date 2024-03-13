/* Libreries */
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

/* Invoked function */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Graphs() {
  /* let average = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reverse(); */
  let skills = ['JavaScript', 'ReactJS', 'HTML', 'CSS', 'Sass', 'Tailwind', 'GitBash', 'Ingles', 'Alemán'];

  let xValuesAxis = [40, 85, 80, 80, 90, 100, 100, 85, 90].reverse();
  
  const options = {
    indexAxis: 'y',
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: { color: '#FFFFFF' },
        grid: {
          display: true,
          color: '#ffffff1a'
        }
      },
      x: {
        min: 0,
        max: 100,
        ticks: { color: '#FFFFFF'},
        grid: {
          display: true,
          color: '#ffffff1a'
        }
      }
    }
  };

  const optionsResponsive = {
    indexAxis: 'x',
    responsive: true,
    animation: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        ticks: { color: '#FFFFFF' },
        grid: {
          display: true,
          color: '#ffffff1a'
        }
      },
      x: {
        min: 0,
        max: 100,
        ticks: { color: '#FFFFFF'},
        grid: {
          display: true,
          color: '#ffffff1a'
        }
      }
    }
  };

  const data = {
    labels: skills,
    datasets: [
      {
        axis: 'y',
        fill: false,
        borderWidth: 1,
        label: 'skills',
        data: xValuesAxis,
        borderColor: '#00A6B2',
        backgroundColor: 'transparent',
        hoverBackgroundColor: '#00A6B2',
      }
    ]
  };

  return(
    <section className="container__graph">
      <div className="container__graph--title">
        <h2>Habilidades</h2>
      </div>
      <div className="container__graph--text">
        <p>Estas son las habilidades que manejo actualmente.</p>
      </div>
      <Bar data={data} options={options} className='graph__main' />
      <Bar data={data} options={optionsResponsive} className='graph__responsive' />
    </section>
  );
}
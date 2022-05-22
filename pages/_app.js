import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

function MyApp({ Component, pageProps }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
   );
  return (
  <>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp

import styles from './Inflation.module.css';
import Header from '../../components/header';
import Chart from '../../components/chart';
Chart
const Inflation = () =>{
    return (
        <>
        <header>
           <div className='container'>
               <div className="row">
               <div className='col-md-12'>
               <Header />
               </div>
               </div>
           </div>
        </header>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Chart />
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        footer
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Inflation;
import React, {useState, useEffect} from "react";
import './App.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './slider.css';

function App() {

  const [totalAmount, setTotal] = useState(5000);
  const [installments, setInstallments] = useState(3);
  const [monthlyRate, setMonthlyRate] = useState();

  useEffect( ()=> {
    let rate = totalAmount / installments;

    rate = new Intl.NumberFormat('en-IN', {maximumFractionDigits: 2}).format(rate);

    setMonthlyRate(rate);

  }, [totalAmount, installments] );

  return (
    <div className="App">
      <article className={`simulator`}>
        <h2>Simulá tu crédito</h2>
        <section className={`total-amnt`}>
          <section className={`input`}>
            <label htmlFor={`total`}>Monto Total</label>
            <input id={`total`} value={totalAmount} onChange={(e)=>{setTotal( e.target.value)}}/>
          </section>
          <Slider
            defaultValue={totalAmount}
            value={totalAmount}
            min={5000}
            max={50000}
            step={1000}
            marks={{ 5000: '$ 5.000', 50000: '$ 50.000' }}
            onChange={(value)=>{setTotal(value)}} />
        </section>
        <section className={`installment-amnt`}>
          <section className={`input`}>
            <label htmlFor={`installments`}>Plazo</label>
            <input id={`installments`} value={installments} onChange={(e)=>{setInstallments(e.target.value)}}/>
          </section>
          <Slider defaultValue={installments}
                  value={installments}
                  min={3}
                  max={24}
                  marks={{ 3: 3, 24: 24 }}
                  onChange={(value)=>{setInstallments(value)}} />
        </section>
        <section className={`monthly-rate`}>
            <h2>Cuota Fija por Mes</h2>
            <h3>{monthlyRate}</h3>
        </section>
        <section className={`button-pad`}>
            <button className={`primary`}>Obtené Crédito</button>
            <button className={`secondary`}>Ver detalle de<br/>Cuotas</button>
        </section>
      </article>
    </div>
  );
}

export default App;

//o sollevo lo stato per passare da InputForm ad App
//o creo un altro stato per passare da App ad InputForm
//o posso passare da InputForm ad App e da App ad InputForm
//poi dovrò prendere i dati e passarli alla funzione in investment.js ed ottenere il risultato finale

const InputForm = ({ inputValue, handleChange }) => {
  //imposto stato inziale come oggetto che mi servirà per impostare i valori

  return (
    <div id="user-input" className="input-group">
      <div>
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input
          type="number"
          min="0"
          name="initialInvestment"
          value={inputValue.initialInvestment}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input
          type="number"
          min="0"
          name="annualInvestment"
          value={inputValue.annualInvestment}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="expectedReturn">Expected Return</label>
        <input
          type="number"
          min="0"
          name="expectedReturn"
          value={inputValue.expectedReturn}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          min="0"
          name="duration"
          value={inputValue.duration}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputForm;

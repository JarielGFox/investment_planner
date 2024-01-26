const InputForm = ({ inputValue, handleChange }) => {
  //imposto stato inziale come oggetto che mi servirà per impostare i valori

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            min="0"
            name="initialInvestment"
            value={inputValue.initialInvestment}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            min="0"
            name="annualInvestment"
            value={inputValue.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            min="0"
            name="expectedReturn"
            value={inputValue.expectedReturn}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            min="0"
            name="duration"
            value={inputValue.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
};

export default InputForm;

import './CurrencyConverterForm.css';

const CurrencyConverterForm = ({ onConvert }) => {
  return (
    <form className="form-container" onSubmit={onConvert}>
      <div className="input-group">
        <input className='form-element'
          type="number"
          step="0.01"
          placeholder="Kwota"
          name="amount"
        />
      </div>
      <div className="select-group">
        <select className='form-element' name="currency">
          <option value="eur">Euro (EUR)</option>
          <option value="usd">US Dollar (USD)</option>
          <option value="chf">Frank Szwajcarski (CHF)</option>
        </select>
      </div>
      <div className="button-group">
        <button 
         className="submit-button form-element" type="submit">
          Przelicz
        </button>
      </div>
    </form>
  );
};

export default CurrencyConverterForm;


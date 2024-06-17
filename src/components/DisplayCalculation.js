import './DisplayCalculation.css';

const DisplayCalculation = ({ result }) => {
  return (
    <div className="result-container">
      {result}
    </div>
  );
};

export default DisplayCalculation;

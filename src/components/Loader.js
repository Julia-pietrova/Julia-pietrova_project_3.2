import './Loader.css';

const Loader = ({ loading }) => {
  return loading ? <div className="loader">Loading...</div> : null;
};

export default Loader;

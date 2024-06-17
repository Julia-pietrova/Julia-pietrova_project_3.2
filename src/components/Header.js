import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="image-container">
        <img className='picture'
          src="https://ocdn.eu/pulscms-transforms/1/r6lk9kuTURBXy8yZWM0MWEwNC05NDc2LTRiMjQtYjYzYy02ZjkxMWJmMDU0NmQuanBlZ5GVAs0CZwDDw94AAaEwAQ"
          alt="pieniądze"
        />
      </div>
      <div>
        <h1 className="title">Przelicznik walut</h1>
      </div>
    </header>
  );
};

export default Header;


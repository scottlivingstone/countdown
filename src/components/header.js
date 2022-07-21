import logo from './logo.svg';

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5">
            Counting down to retirement
        </div>
    </header>
);

export default Header;

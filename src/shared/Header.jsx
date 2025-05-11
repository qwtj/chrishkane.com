import "shared/Header.css";

const Header = (props) => {

    return (
        <header className="header">
            <h1 className="header-title">{props.title}</h1>
        </header>
    );
};

export default Header;
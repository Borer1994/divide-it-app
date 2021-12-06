
import './Header.css';

const Header = (header) => {
    return (
            <div className="header">
                <h1 className="text-header">{header.text} </h1>
            </div>
    );
}
export default Header
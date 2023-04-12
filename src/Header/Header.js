import "./Header.css";

function Header() {
    return (
        <div className="main-header">
            <div className="inner">
                {/* logo */}
                <a href="index.html">
                    <img className="logo" src="./logo.svg" alt="" ></img>
                    <span className="title">biography</span>
                </a>
            </div>
        </div>
    )
};

export default Header;
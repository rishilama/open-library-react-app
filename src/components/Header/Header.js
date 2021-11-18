import { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarVisibilityContext from "../../store/SidebarVisibilityContext";
import { UserContext } from "../../store/userContext";

function Header() {
    const [, , toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
    const {user, setUser} = useContext(UserContext);

    const logoutHandler = () => {
        setUser(null);
    }
    return (
        <header className="site-header" id="site-header">
            <div className="container">
                <button onClick={toggleSidebarVisibility} className="hamburger hamburger--light site-header__toggle-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <Link to="/" className="site-header__logo">
                    <img className="site-header__logo-image" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
                </Link>

                <div className='site-header__user-info'>
                    {!user &&
                        <>
                            <Link to="/login" className="btn btn--hollow site-header__signin">Log In</Link>
                            <Link to="/signup" className="btn btn--hollow site-header__signin">Sign Up</Link>
                        </>
                    }    
                    {user &&
                        <>
                            <span className="user">Hi! {user.user.username} </span>
                            <button className="btn btn--hollow site-header__signin" onClick={logoutHandler}>Log Out</button>
                        </>    
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
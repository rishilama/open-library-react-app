import { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarVisibilityContext from "../../store/SidebarVisibilityContext";
import { UserContext } from "../../store/userContext";

function Sidebar() {
    const [sidebarVisibility, , toggleSidebarVisibility] = useContext(SidebarVisibilityContext);

    const {user} = useContext(UserContext)

    return (
        <>
            <div id="sidebar" className={`sidebar ${sidebarVisibility ? 'active' : ''}`}>
                <button onClick={toggleSidebarVisibility} className="hamburger hamburger--light hamburger--cross sidebar__toggle-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/list">
                                List
                            </Link>
                        </li>
                        <li>
                            <Link to="/book">
                                Book
                            </Link>
                        </li>
                        {user &&
                            <li>
                            <Link to="/create">
                                Create
                            </Link>
                        </li>
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;
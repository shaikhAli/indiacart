import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/school">School</Link>
                    </li>
                    <li>
                        <Link to="/my-hooks">My Hooks</Link>
                    </li>
                </ul>
            </nav>

            <div className="layout-container">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Router/Layout";
import LoginPage from "../Components/Authentication/Login";
function PrivateRoute({ isLogin, children }) {
    return isLogin ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ isLogin, children }) {
    return isLogin ? <Navigate to="/" replace /> : children;
}

function App() {
    const isLogin = false;  // Replace this with your actual login logic

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute isLogin={isLogin}><Layout/></PrivateRoute>}>
                    <Route path="Home" element={<HomePage />} />
                    <Route path="profile" element={<p>this profile page</p>}/>
                </Route>

                <Route path="/" element={<PublicRoute isLogin={isLogin}><Outlet/></PublicRoute>} >
                    <Route path="login" element={<LoginPage/>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

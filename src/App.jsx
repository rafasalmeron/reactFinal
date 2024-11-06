import Home from './pages/Home/index.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cadastro from "./pages/cadastro/index.jsx";
import Sobre from "./pages/Sobre/index.jsx";
import {Header} from "./Components/Header/Header.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import { Login } from "./pages/login";
import MyAccount from "./pages/MyAccount/index.jsx";
import NotFound from "./pages/404/NotFound.jsx";
import {useEffect, useState} from "react";
import {Loader} from "./components/loader/Loader.jsx";
import { ShoppingCart } from './pages/Carrinho/index.jsx';

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
        {loading ? (
            <Loader/>
        ) : (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={''} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/myaccount" element={<MyAccount />} />
                    <Route path="/carrinho" element ={<ShoppingCart/>}/>
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )}
        </>
  )
}
export default App 
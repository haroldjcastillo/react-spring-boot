import {Navigate, Route, Routes} from "react-router-dom";
import Consent from "./components/Consent";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate replace to="/login"/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/consent' element={<Consent/>}/>
                <Route path='/404' element={<NotFound/>}/>
                <Route path="*" element={<Navigate replace to="/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router"
import Dashboard from "./views/Dashboard/Dashboard"
import ResultDashboard from "./views/ResultDashboard/ResultDashboard";
import Home from "./views/Home/Home";

const AppRoutes  = ()=>{
    return(
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/results" Component={ResultDashboard}/>
        </Routes>
    )

}

export default AppRoutes; 
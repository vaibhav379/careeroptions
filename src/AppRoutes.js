import { Route, Routes } from "react-router"
import Dashboard from "./views/Dashboard/Dashboard"
import ResultDashboard from "./views/ResultDashboard/ResultDashboard";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";



const AppRoutes  = ()=>{
    return(
        <Routes>
            <Route path="/" Component={Welcome}/>
            <Route path="/home" Component={Home}/>
            <Route path="/dashboard" Component={Dashboard}/>
            <Route path="/results" Component={ResultDashboard}/>
        </Routes>
    )

}

export default AppRoutes; 
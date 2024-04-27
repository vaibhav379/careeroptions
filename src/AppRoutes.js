import { Route, Routes } from "react-router"
import Dashboard from "./views/Dashboard/Dashboard"
import ResultDashboard from "./views/ResultDashboard/ResultDashboard";

const AppRoutes  = ()=>{
    return(
        <Routes>
            <Route path="/" Component={Dashboard}/>
            <Route path="/results" Component={ResultDashboard}/>
        </Routes>
    )

}

export default AppRoutes; 
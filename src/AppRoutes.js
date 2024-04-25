import { Route, Routes } from "react-router"
import Dashboard from "./views/Dashboard/Dashboard"

const AppRoutes  = ()=>{
    return(
        <Routes>
            <Route path="/" Component={Dashboard}/>
        </Routes>
    )

}

export default AppRoutes; 
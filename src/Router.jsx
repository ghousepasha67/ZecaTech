import { Route, Routes } from "react-router-dom";
import Firstpage from "./pages/first page/Firstpage";
import Fourpage from "./pages/fourpage/Fourpage";
import Secondpage from "./pages/secondpage/Secondpage";
import Thirdpage from "./pages/thirdpage/Thirdpage";

function Router(){
    return(
        <div>
            <Routes>
                <Route path='/' Component={Firstpage}></Route>
                <Route path='/secondPage' Component={Secondpage}></Route>
                <Route path='/thirdPage' Component={Thirdpage}></Route>
                <Route path='/Fourpage' Component={Fourpage}></Route>
            </Routes>
        </div>
    )
}

export default Router;
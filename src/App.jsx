import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home/index.jsx";
import {Layout} from "./pages/Layout/index.jsx";
import {AboutUs} from "./pages/AboutUs/index.jsx";
import {RegisterStudent} from "./pages/RegisterStudent/index.jsx";
import {ShowStudents} from "./pages/ShowStudents/index.jsx";

export const App = () => {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path={'/'} exact/>
            <Route element={<AboutUs />} path={'/sobre'} exact/>
            <Route element={<RegisterStudent />} path={'/cadastrar'} exact/>
            <Route element={<ShowStudents />} path={'/listar'} exact/>
        </Route>
      </Routes>
    </Router>
  )
}

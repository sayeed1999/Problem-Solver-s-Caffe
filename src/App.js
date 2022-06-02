import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/modules/Auth/Login/Login";
import Signup from "./components/modules/Auth/Signup/Signup";
import Caffe from "./components/modules/Caffe/Caffe";
import ChitChat from "./components/modules/ChitChat/ChitChat";
import QuizDashBoard from "./components/modules/QuizDashBoard/QuizDashBoard";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./constants/AppRoutes";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NavBar />
        <Layout>
          <Routes>
            <Route exact path={AppRoutes.Home} element={<Caffe />} />
            <Route exact path={AppRoutes.Caffe} element={<Caffe />} />
            <Route exact path={AppRoutes.ChitChat} element={<ChitChat />} />
            <Route exact path={AppRoutes.Quiz} element={<QuizDashBoard />} />
            <Route exact path={AppRoutes.Signup} element={<Signup />} />
            <Route exact path={AppRoutes.Login} element={<Login />} />
          </Routes>
        </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;

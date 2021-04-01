import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Videos from "../videos/Videos";
import VideosForm from "../videos/VideosForm";
import VideoShow from "../videos/VideoShow";
import Profile from "../users/Profile";
import HomePage from "../Home";
import SignUp from "../users/SignUp";
import SignIn from "../users/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/user";

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Go to videos</Link>
      <h1>Esta pagina aun no esta lista</h1>
    </>
  );
};

//6 ERROR
let Error404 = () => {
  return (
    <>
      <Link to="/">Go to HOME</Link>
      <h1>Esta pagina no existe - 404</h1>
    </>
  );
};


let AppRoutes = (props) => {
  let user = useSelector((state) => state.user.user);
  return (
    <Routes>
      {/* //3 Definir boilerplate */}

      <Route path="/" element={<HomePage />} />

      <Route
        path="/users"
        element={user ? <Navigate to="/videos" /> : <Outlet />}
      >
        <Route path="register" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>

      <Route path="" element={user ? <Outlet /> : <Navigate to="/users/signin" /> }>
        <Route path="users/miperfil" element={<Profile />} />
        <Route path="users/:id/videos" element={<NotImplemented />} />
        <Route path="/videos">
          <Route path="/" element={<Videos />} />
          <Route path="/new" element={<VideosForm />} />
          <Route path="/:id" element={<VideoShow />} />
        </Route>
      </Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default AppRoutes;

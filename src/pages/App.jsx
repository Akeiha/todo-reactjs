import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Home,
  PrivacyPage,
  SignInPage,
  SignUpPage,
  TodosPage,
  EditProfilePage,
} from "src/pages";
import { DefaultLayout } from "src/ui/layouts";

import { $isAutentificated } from "src/models/SignIn";
import { useUnit } from "effector-react";
import { useEffect } from "react";
//import {Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, path }) => {
  const isAutentificated = useUnit($isAutentificated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutentificated) {
      navigate(path || "/");
    }
  }, [isAutentificated]);

  return isAutentificated ? children : null;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route
          path="todos"
          element={
            <PrivateRoute>
              <TodosPage />
            </PrivateRoute>
          }
        />
        <Route
          path="edit-profile"
          element={
            <PrivateRoute>
              <EditProfilePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

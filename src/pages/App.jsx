import { Routes, Route } from "react-router-dom";
import {
  Home,
  PrivacyPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
  TodosPage,
} from "src/pages";
import { DefaultLayout } from "src/ui/layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-out" element={<SignOutPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { ScrollToTop } from "src/ui/components";
import { Header, Footer, SideNav } from "../blocks";
import { $isAutentificated } from "src/models/SignIn";
import { useUnit } from "effector-react";

export function DefaultLayout() {
  const isAutentificated = useUnit($isAutentificated);

  return (
    <>
      <ScrollToTop />
      <Header />
      <SideNav />
      <main className={isAutentificated ? "main main__auth" : "main"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

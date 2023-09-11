import { Outlet } from "react-router-dom";
import { ScrollToTop } from "src/ui/components";
import { Header, Footer, SideNav } from "../blocks";
import { isAutentificated } from "src/dict/mock";

export function DefaultLayout() {
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

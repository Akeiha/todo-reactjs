import "src/ui/styles/pages/home.scss";

export function Home() {
  return (
    <div className="home">
      <h1 className="h1">Bit Blazor Project Template</h1>
      <p className="home__desc body1">
        Create your multi-mode (WASM, Server, Hybrid, pre-rendering) Blazor app
        easily in the shortest time ever!
      </p>
      <a
        href="https://github.com/Akeiha?tab=repositories"
        className="home__button"
        target="_blank"
      >
        GitHub Repo
      </a>
    </div>
  );
}

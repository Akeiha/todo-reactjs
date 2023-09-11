import { GitHubSVG, InIconSVG, TwitterSVG, YouTubeSVG } from "../images/svg";
import { isAutentificated } from "src/dict/mock";

import "src/ui/styles/blocks/footer.scss";

export function Footer() {
  return (
    <footer className={isAutentificated ? "footer footer__auth" : "footer"}>
      <div className="footer__content">
        <div className="footer__icon">
          <InIconSVG />
          <GitHubSVG />
          <YouTubeSVG />
          <TwitterSVG />
        </div>
        <div className="footer__line"></div>
        <div className="footer__desc caption1">
          <p>info@bitplatform.dev</p>
          <p>Made with ❤ using bit platform!</p>
        </div>
      </div>
    </footer>
  );
}

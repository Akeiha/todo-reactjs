import "src/ui/styles/pages/privacy.scss";

export function PrivacyPage() {
  return (
    <div className="privacy-page">
      <h2
        className="h2"
        style={{ color: "var(--white)", marginBottom: "24px" }}
      >
        Privacy Policy
      </h2>
      <p className="body2" style={{ marginBottom: "32px" }}>
        Use this page to detail your site’s privacy policy.
      </p>
      <p className="subtitle1" style={{ marginBottom: "16px" }}>
        Privacy Policy
      </p>
      <p className="body2">
        Use this section to detail your site’s privacy policy.
      </p>
    </div>
  );
}

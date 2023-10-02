import "src/ui/styles/components/edit-profile/upload-image.scss";
import { UploadIconSVG } from "../../images/svg";

export function UploadImageInput({ setFile }) {
  const handleChange = function loadFile(event) {
    if (event.target.files.length > 0) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        setFile(reader.result);
      };
      reader.onerror = () => {};
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        type="file"
        onChange={handleChange}
        id="upload"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="upload" className="upload-input caption1">
        <UploadIconSVG />
        Upload a new profile photo
      </label>
    </div>
  );
}

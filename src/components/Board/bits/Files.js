import "./Files.css";
import { getCharacter } from "../../../helpful/helper";

const Files = ({ files }) => (
  <div className="files">
    {files.map((file) => (
      <span key={file}>{getCharacter(file)}</span>
    ))}
  </div>
);

export default Files;

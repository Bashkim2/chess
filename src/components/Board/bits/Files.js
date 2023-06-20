import "../../../css/Files.css";
import { getCharacter } from "../../../helpful/helper";

// const Files = ({ files }) => (
//   <div className="files">
//     {files.map((file) => (
//       <span key={file}>{getCharacter(file)}</span>
//     ))}
//   </div>
// );

function Files({ files }) {
  function getSpanCB(file) {
    return <span key={file}>{getCharacter(file)}</span>;
  }
  return <div className="files">{files.map(getSpanCB)}</div>;
}

export default Files;

// export default function Files({ files }) {
//   return <div>Files</div>;
// }

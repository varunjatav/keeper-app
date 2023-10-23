import Notes from "./Note";
import { notes } from "../notes";
function AppComp() {
  return (
    <div>
      {notes.map((note) => {
        return <Notes title={note.title} content={note.content} />;
      })}
    </div>
  );
}

export default AppComp;

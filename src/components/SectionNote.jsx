import { useNavigate } from "react-router-dom";
import CardRecentNotes from "../components/CardRecentNotes";

function SectionNote({ onSelectNote }) {
  const notes = [
    { id: 1, title: "My shopping list" },
    { id: 2, title: "Workout plan" },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h5 className="text-black">Your Recent Notes</h5>
      <button>New Notes</button>  
      {notes.map((note) => (
        <CardRecentNotes
          key={note.id}
          note={note}
          onClick={() => onSelectNote(note)}
        />
      ))}
    </div>
  );
}

export default SectionNote;

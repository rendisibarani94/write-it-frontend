import { useParams } from "react-router-dom";

function NoteDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Note {id}</h2>
      <p>Isi detail note akan ditampilkan di sini.</p>
    </div>
  );
}

export default NoteDetail;

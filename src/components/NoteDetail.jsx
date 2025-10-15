import { useParams, useNavigate } from "react-router-dom";

function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} className="text-black mb-4">
        ← Back
      </button>
      <h2 className="text-black">Detail Note {id}</h2>
      <p className="text-black">Isi detail note kamu bisa ditampilkan di sini.</p>
    </div>
  );
}

export default NoteDetail;

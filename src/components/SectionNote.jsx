import CardRecentNotes from "../components/CardRecentNotes";

function SectionNote(){
    return(
        <div>
            <h4>Your Recent Notes</h4>
            <button>New Notes</button>
            <CardRecentNotes />
        </div>
    );
}

export default SectionNote
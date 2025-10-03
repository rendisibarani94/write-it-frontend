import { useParams } from "react-router-dom";

function ToDoDetail(){
    const { id } = useParams();

    return(
        <div>
            <h2>Detail Note {id}</h2>
        </div>
    );
}

export default ToDoDetail
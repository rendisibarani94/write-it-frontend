import { useNavigate } from "react-router-dom";
import CardRecentToDo from "./cardRecentToDo";

function SectionToDo({ onSelectToDo }) {
  const todos = [
    { id: 1, title: "Finish project" },
    { id: 2, title: "Clean house" },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h4>Your Recent To Do</h4>
      <button>Add To Do</button>
      {todos.map((todo) => (
        <CardRecentToDo
          key={todo.id}
          todo={todo}
          onClick={() => onSelectToDo(todo)}
        />
      ))}
    </div>
  );
}

export default SectionToDo;

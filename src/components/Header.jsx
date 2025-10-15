import { useNavigate } from "react-router-dom";

function Header({ activeSection, onSelectSection }) {
    const navigate = useNavigate();

    const handleClick = (section) => {
    onSelectSection(section);
    navigate(`/home/${section}`);
    };

    return (
    <header className="bg-white backdrop-blur-md border-b border-neutral-800">
        <nav className="flex items-center justify-between px-6 py-3">
        {/* 👋 Greeting */}
        <h4 className="text-black font-semibold text-lg tracking-wide">
            user
        </h4>

        {/* 🧭 Navigation Buttons */}
        <ul className="flex space-x-3">
            <li>
            <button
                onClick={() => handleClick("note")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 
                ${
                activeSection === "note"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-blue-950 text-blue-300 hover:bg-blue-800 hover:text-white"
                }`}
            >
                Note
            </button>
            </li>
            <li>
            <button
                onClick={() => handleClick("todo")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 
                ${
                activeSection === "todo"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                    : "bg-purple-950 text-purple-300 hover:bg-purple-800 hover:text-white"
                }`}
            >
                To Do
            </button>
            </li>
        </ul>
        </nav>
    </header>
    );
}

export default Header;

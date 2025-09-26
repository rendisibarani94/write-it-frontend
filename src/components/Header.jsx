
function Header({ activeSection, onSelectSection }) {
    return(
        <header>
            <nav className="navHeader">
                <h4>Hi User</h4>
                <ul>
                    <li>
                        <button 
                        className={`buttonPrimaryBlue ${activeSection === "notes" ? "active" : ""}`}  
                        onClick = {() => onSelectSection("notes")}>Notes</button>
                    </li>
                    <li>
                        <button  
                        className={`buttonPrimaryPurple ${activeSection === "todo" ? "active" : ""}`}
                        onClick={() => onSelectSection("todo")}>To Do</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}



export default Header

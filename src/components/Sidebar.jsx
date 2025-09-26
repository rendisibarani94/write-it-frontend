
function Sidebar() {
    return(
        <nav className="navSidebar">
            <ul>
                <li><a href="#">Write It</a></li>
                <li>
                    <select className="sidebarDropdown" id="notes" name="notes">
                        <option value="notes1">My Speach</option>
                        <option value="notes2">Shopping List</option>
                    </select>
                </li>
                <li>
                    <select id="todo" name="todo">
                        <option value="todo1">My Homework</option>
                        <option value="todo2">My Design Task</option>
                    </select>
                </li> 
            </ul>
            <button className="buttonAccount">
                Account
            </button>
        </nav>
    );
}

export default Sidebar

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SectionNote from "../components/SectionNote";
import SectionToDo from "../components/SectionToDo";
import ToDoDetail from "../components/ToDoDetail";
import NoteDetail from "../components/NoteDetail";


function HomePage(){
  const [activeSection, setActiveSection] = useState("notes");
  // set tampilan awal jadi notes dengan library use state
  const [selectedItem, setSelectedItem] = useState(null);
    return(
        <div className="appLayout">
        <Sidebar />
        <div className="mainContent">
          {!selectedItem && (
            <Header
              activeSection={activeSection}
              onSelectSection={setActiveSection}
            />
          )}
          <div>
          {selectedItem ? (
            <>
              {selectedItem.type === "note" && (
                <NoteDetail
                  note={selectedItem.data}
                  // onBack={() => setSelectedItem(null)}
                />
              )}
              {selectedItem.type === "todo" && (
                <ToDoDetail
                  todo={selectedItem.data}
                  // onBack={() => setSelectedItem(null)}
                />
              )}
            </>
          ) : (
            <>
              {activeSection === "notes" && (
                <SectionNote
                  onSelectNote={(note) =>
                    setSelectedItem({ type: "note", data: note })
                  }
                />
              )}
              {activeSection === "todo" && (
                <SectionToDo
                  onSelectToDo={(todo) =>
                    setSelectedItem({ type: "todo", data: todo })
                  }
                />
              )}
            </> 
          )}
        </div>
        </div>
      </div>
    );
}

export default HomePage


// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import SectionNote from "../components/SectionNote";
// import SectionToDo from "../components/SectionToDo";


// function HomePage(){
//   const [activeSection, setActiveSection] = useState("notes");
//   // set tampilan awal jadi notes dengan library use state
//     return(
//       <div className="appLayout">
//           <Sidebar/>
//           <Header
//             activeSection={activeSection}
//             onSelectSection={setActiveSection}
//           />
//            <div>
//             {/* section content */}
//             {activeSection === "notes" && <SectionNote />}
//             {activeSection === "todo" && <SectionToDo />}
//           </div> 
//       </div>
//     );
// }

// export default HomePage
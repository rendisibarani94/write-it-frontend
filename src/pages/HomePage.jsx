import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function HomePage() {
  const [activeSection, setActiveSection] = useState("note");
  const location = useLocation();
  const navigate = useNavigate();

  // 🔄 Sinkronkan tab aktif berdasarkan URL
  useEffect(() => {
    if (location.pathname.includes("/todo")) {
      setActiveSection("todo");
    } else if (location.pathname.includes("/note")) {
      setActiveSection("note");
    } else if (location.pathname === "/home") {
      // redirect default ke note
      navigate("/home/note", { replace: true });
    }
  }, [location, navigate]);

  const isDetailPage =
    location.pathname.includes("/home/note/") ||
    location.pathname.includes("/home/todo/");

  return (
    <div className="flex h-screen bg-white-950 text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header hanya muncul jika bukan di halaman detail */}
        {!isDetailPage && (
          <Header
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />
        )}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HomePage;



// import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import SectionNote from "../components/SectionNote";
// import SectionToDo from "../components/SectionToDo";
// import ToDoDetail from "../components/ToDoDetail";
// import NoteDetail from "../components/NoteDetail";

// function HomePage(){
//   const [activeSection, setActiveSection] = useState("notes");
//   // set tampilan awal jadi notes dengan library use state
//   const [selectedItem, setSelectedItem] = useState(null);
//     return(
//         <div className="appLayout">
//         <Sidebar />
//         <div className="mainContent">
//           {!selectedItem && (
//             <Header
//               activeSection={activeSection}
//               onSelectSection={setActiveSection}
//             />
//           )}
//           <div>
//           {selectedItem ? (
//             <>
//               {selectedItem.type === "note" && (
//                 <NoteDetail
//                   note={selectedItem.data}
//                   // onBack={() => setSelectedItem(null)}
//                 />
//               )}
//               {selectedItem.type === "todo" && (
//                 <ToDoDetail
//                   todo={selectedItem.data}
//                   // onBack={() => setSelectedItem(null)}
//                 />
//               )}
//             </>
//           ) : (
//             <>
//               {activeSection === "notes" && (
//                 <SectionNote
//                   onSelectNote={(note) =>
//                     setSelectedItem({ type: "note", data: note })
//                   }
//                 />
//               )}
//               {activeSection === "todo" && (
//                 <SectionToDo
//                   onSelectToDo={(todo) =>
//                     setSelectedItem({ type: "todo", data: todo })
//                   }
//                 />
//               )}
//             </> 
//           )}
//         </div>
//         </div>
//       </div>
//     );
// }

// export default HomePage
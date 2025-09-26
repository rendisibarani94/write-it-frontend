import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SectionNote from "../components/SectionNote";
import SectionToDo from "../components/SectionToDo";


function HomePage(){
  const [activeSection, setActiveSection] = useState("notes");
  // set tampilan awal jadi notes dengan library use state
    return(
        <div className="appLayout">
        <Sidebar />
        <div className="mainContent">
          <Header
            activeSection={activeSection}
            onSelectSection={setActiveSection}
          />
          <div>
            {/* section content */}
            {activeSection === "notes" && <SectionNote />}
            {activeSection === "todo" && <SectionToDo />}
          </div>
        </div>
      </div>
    );
}

export default HomePage
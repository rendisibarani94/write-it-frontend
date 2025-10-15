import { useState } from "react";
import logo from "../assets/image/logo.svg";

function Sidebar() {
    const [openNotes, setOpenNotes] = useState(true);
    const [openTodo, setOpenTodo] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
        className={`h-screen ${
            collapsed ? "w-20" : "w-64"
        } bg-neutral-900 text-gray-200 flex flex-col p-4 space-y-4`}
        >
        {/* Header */}
        <div
            className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
            }`}
        >
            {/* Logo + Title */}
            <div
            className={`flex items-center ${
                collapsed ? "justify-center" : "space-x-2"
            } text-lg font-semibold cursor-pointer w-full`}
            onClick={() => {
                if (collapsed) setCollapsed(false); // klik logo hanya buka kalau collapse
            }}
            >
            <img
                src={logo}
                className={`w-8 ${collapsed ? "" : "mr-2"}`}
                alt="logo"
            />
            {!collapsed && <span>Write It</span>}
            </div>

            {/* Tombol collapse — hanya muncul kalau belum collapse */}
            {!collapsed && (
            <button
                onClick={() => setCollapsed(true)}
                className="text-gray-400 hover:text-white transition text-sm"
            >
                ◀
            </button>
            )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
            {/* Notes Section */}
            <div>
            <button
                onClick={() => setOpenNotes(!openNotes)}
                className="w-full flex justify-between items-center py-2 px-3 rounded hover:bg-neutral-800 transition"
            >
                <span>{collapsed ? "📝" : "Notes"}</span>
                {!collapsed && <span>{openNotes ? "▲" : "▼"}</span>}
            </button>

            {!collapsed && openNotes && (
                <ul className="pl-6 mt-1 space-y-1 text-sm">
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    Pengecekan field di React
                </li>
                <li className="py-1 px-2 rounded bg-neutral-800 cursor-pointer">
                    Tailwind
                </li>
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    Github
                </li>
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    Masalah tampilan home...
                </li>
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    Routing react js
                </li>
                </ul>
            )}
            </div>

            {/* Todo Section */}
            <div>
            <button
                onClick={() => setOpenTodo(!openTodo)}
                className="w-full flex justify-between items-center py-2 px-3 rounded hover:bg-neutral-800 transition"
            >
                <span>{collapsed ? "✅" : "To-Do"}</span>
                {!collapsed && <span>{openTodo ? "▲" : "▼"}</span>}
            </button>

            {!collapsed && openTodo && (
                <ul className="pl-6 mt-1 space-y-1 text-sm">
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    My Homework
                </li>
                <li className="py-1 px-2 rounded hover:bg-neutral-800 cursor-pointer">
                    My Design Task
                </li>
                </ul>
            )}
            </div>
        </nav>

        {/* Tombol bawah */}
        <button className="mt-auto py-2 px-4 bg-neutral-800 hover:bg-neutral-700 rounded">
            {collapsed ? "👤" : "Account"}
        </button>
        </div>
    );
    }

export default Sidebar;

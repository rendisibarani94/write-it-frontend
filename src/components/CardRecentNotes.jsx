import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iconActionMenu from "../assets/icon/icon-actionMenu.svg";
import iconTrashBin from "../assets/icon/icon-trashBin.svg";
import iconEdit from "../assets/icon/icon-edit.svg";

function CardRecentNotes({ note }) {
  const navigate = useNavigate();
  const [showPopover, setShowPopover] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!showPopover && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 6,
        left: rect.right - 160,
      });
    }
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Klik card -> buka detail Note
  const handleOpenDetail = () => {
    navigate(`/home/note/${note.id}`);
  };

  return (
    <div
      className="relative cardRecent cursor-pointer bg-neutral-800 p-4 rounded-xl hover:bg-neutral-700 transition-colors duration-200 flex justify-between items-center"
      onClick={handleOpenDetail}
    >
      <p className="text-gray-100 font-medium truncate">{note.title}</p>

      <ul>
        <li className="actionMenuWrapper">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="buttonIcon p-2 hover:bg-neutral-700 rounded-full"
          >
            <img className="icon w-5 h-5" src={iconActionMenu} alt="action menu" />
          </button>
        </li>
      </ul>

      {showPopover && (
        <div
          ref={menuRef}
          className="absolute z-50 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
          onClick={(e) => e.stopPropagation()} // biar klik menu gak buka detail
        >
          <div className="modalOverlayMenu p-2">
            <ul className="flex flex-col gap-1">
              <li>
                <button
                  className="buttonWithIcon flex items-center gap-2 px-3 py-2 w-full hover:bg-neutral-800 rounded-md text-sm text-gray-200"
                  onClick={() => {
                    setShowPopover(false);
                    alert("Edit Note belum diimplementasi");
                  }}
                >
                  <img className="icon w-4 h-4" src={iconEdit} alt="edit" />
                  <span>Edit Name</span>
                </button>
              </li>
              <li>
                <button
                  className="buttonWithIcon flex items-center gap-2 px-3 py-2 w-full hover:bg-neutral-800 rounded-md text-sm text-red-400"
                  onClick={() => {
                    setShowPopover(false);
                    alert("Delete Note belum diimplementasi");
                  }}
                >
                  <img className="icon w-4 h-4" src={iconTrashBin} alt="trash bin" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardRecentNotes;

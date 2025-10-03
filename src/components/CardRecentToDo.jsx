import { useState, useRef, useEffect } from 'react';
import iconActionMenu from '../assets/icon/icon-actionMenu.svg';
import iconTrashBin from '../assets/icon/icon-trashBin.svg';
import iconEdit from '../assets/icon/icon-edit.svg';

function CardRecentToDo({todo, onClick}){ 
const [showPopover, setShowPopover] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // toggle popover dan hitung posisi button
  const handleToggle = () => {
    if (!showPopover && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 6,
        left: rect.right - 160 + window.scrollX,
      });
    }
    setShowPopover(!showPopover);
  };

  // klik di luar -> tutup popover
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

  return (
    <div className="cardRecent" onClick={onClick}>
      <p>{todo.title}</p>
      <ul>
        <li className="actionMenuWrapper">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="buttonIcon"
          >
            <img className="icon" src={iconActionMenu} alt="action menu" />
          </button>
        </li>
      </ul>

      {showPopover && (
        <div
          ref={menuRef}
          className="modalOverlay"
          style={{
            position: "absolute",
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <div className="modalOverlayMenu">
            <ul>
              <li>
                <button className="buttonWithIcon">
                  <img className="icon" src={iconEdit} alt="edit" />
                  <span>Edit Name</span>
                </button>
              </li>
              <li>
                <button className="buttonWithIcon">
                  <img className="icon" src={iconTrashBin} alt="trash bin" />
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

export default CardRecentToDo

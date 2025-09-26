import iconTrashBin from './assets/icon/icon-trashBin.svg'

function CardRecentToDo(){ 
    return(
        <div className="cardRecent">
            <p>My shopping list 2</p>
            {/* ganti jadi icon */}
            <ul>
                <li>
                    <button>edit</button>
                </li>
                <li>
                    <button className='buttonIcon'><img className="icon" src={iconTrashBin} alt="trash bin"/></button>
                </li>
            </ul>
        </div>
    );
}

export default CardRecentToDo

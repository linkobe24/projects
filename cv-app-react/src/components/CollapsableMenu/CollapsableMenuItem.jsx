import {
    VisbilityIcon,
    VisbilityOffIcon,
    EditIcon,
    TrashIcon,
} from '../Icons/Icons'

export default function CollapsableMenuItem({
    item,
    onShowItem,
    onClickEditItem,
    onDeleteItem,
}) {
    return (
        <li className="item">
            <h3>{item.school || item.company}</h3>
            <div className="item-buttons">
                <button
                    className="icon-btn"
                    onClick={() => onShowItem(item.id)}
                >
                    {!item.visibility ? (
                        <VisbilityOffIcon />
                    ) : (
                        <VisbilityIcon />
                    )}
                </button>
                <button
                    className="icon-btn"
                    onClick={() => onClickEditItem(item.id)}
                >
                    <EditIcon />
                </button>
                <button
                    className="icon-btn delete"
                    onClick={() => onDeleteItem(item.id)}
                >
                    <TrashIcon />
                </button>
            </div>
        </li>
    )
}

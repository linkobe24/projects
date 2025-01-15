import { useState } from 'react'
import CollapsableMenuItem from './CollapsableMenuItem'
import Button from '../Button'

export default function CollapsableMenu({
    section,
    data,
    onShowForm,
    onClickEditItem,
    onDeleteItem,
    onShowItem,
}) {
    const [isExpanded, setIsExpandend] = useState(true)

    const handleIsExpanded = () => {
        setIsExpandend((s) => !s)
    }

    return (
        <div className="container main-content">
            <div className="top">
                <h2>{section}</h2>
                <button
                    className="expand-btn"
                    onClick={handleIsExpanded}
                >
                    <span className={isExpanded ? 'symbol' : 'symbol rotate'}>
                        ∧
                    </span>
                </button>
            </div>
            {isExpanded && (
                <ul className="items">
                    {data?.map((item) => (
                        <CollapsableMenuItem
                            key={item.id}
                            item={item}
                            onClickEditItem={onClickEditItem}
                            onDeleteItem={onDeleteItem}
                            onShowItem={onShowItem}
                        />
                    ))}
                </ul>
            )}
            <div className="bottom">
                <Button onClick={onShowForm}>➕Add</Button>
            </div>
        </div>
    )
}

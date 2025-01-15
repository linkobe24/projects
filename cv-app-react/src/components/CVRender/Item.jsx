export default function Item({ item }) {
    return (
        <li className="item-container">
            <div className="left">
                <p className="date">
                    {item.start} - {!item.end ? 'Present' : item.end}
                </p>
            </div>
            <div className="rigth">
                <p className="school">{item.school || item.company}</p>
                <p className="degree">{item.degree || item.job} </p>
                {item.description && (
                    <p className="description">{item.description}</p>
                )}
            </div>
        </li>
    )
}

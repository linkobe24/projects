import Item from './Item'

export default function Section({ title, data }) {
    return (
        <section>
            <div className="section-header">
                <p>{title}</p>
            </div>
            <ul className="section-content">
                {data.map((item) => {
                    return (
                        item.visibility && (
                            <Item
                                key={item.id}
                                item={item}
                            />
                        )
                    )
                })}
            </ul>
        </section>
    )
}

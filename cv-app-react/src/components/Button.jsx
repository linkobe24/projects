export default function Button({ children, type, btnType, onClick }) {
    return (
        <button
            className={`form-btn ${type}`}
            onClick={onClick}
            type={btnType}
        >
            {children}
        </button>
    )
}

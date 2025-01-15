export default function TextInputField({
    id,
    type = 'text',
    label,
    value,
    onChange,
    required = true,
}) {
    const maxCharacters = 400

    const handleChange = (e) => {
        onChange(id, e.target.value)
    }

    if (type === 'textarea') {
        return (
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <textarea
                    className="fixed-textarea"
                    id={id}
                    value={value}
                    onChange={handleChange}
                    required={required}
                    maxLength={maxCharacters}
                    wrap="soft"
                />
                <p
                    className={
                        value.length >= maxCharacters
                            ? 'textarea-max-characters limit-reached'
                            : 'textarea-max-characters'
                    }
                >
                    {value.length}/{maxCharacters}{' '}
                    {value.length >= maxCharacters
                        ? 'limit reached'
                        : 'characters'}
                </p>
            </div>
        )
    }

    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </div>
    )
}

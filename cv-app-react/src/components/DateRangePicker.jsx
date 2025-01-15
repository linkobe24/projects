import { useEffect, useState } from 'react'

export default function DateRangePicker({
    startId,
    endId,
    startValue,
    endValue,
    onChange,
    editingItem,
}) {
    const [currentlyAttending, setCurrentlyAttending] = useState(false)

    const handleChangeStart = (e) => {
        onChange(startId, e.target.value)
    }

    const handleChangeEnd = (e) => {
        onChange(endId, e.target.value)
    }

    function handleCheckboxChange(e) {
        setCurrentlyAttending(e.target.checked)
        if (e.target.checked) {
            onChange(endId, '')
        }
    }

    useEffect(() => {
        if (editingItem && editingItem.end === '') {
            setCurrentlyAttending(true)
        }
    }, [editingItem])

    return (
        <div className="date-rage-picker">
            <div className="pair-container">
                <div className="input-container">
                    <label htmlFor={startId}>Start date</label>
                    <input
                        id={startId}
                        type="date"
                        value={startValue}
                        onChange={handleChangeStart}
                        required
                    />
                </div>
                <div className="input-container">
                    <label htmlFor={endId}>End date</label>
                    <input
                        id={endId}
                        type="date"
                        value={endValue}
                        onChange={handleChangeEnd}
                        disabled={currentlyAttending}
                        required
                    />
                </div>
            </div>
            <div className="checkbox">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={currentlyAttending}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="checkbox">Currently attending</label>
            </div>
        </div>
    )
}

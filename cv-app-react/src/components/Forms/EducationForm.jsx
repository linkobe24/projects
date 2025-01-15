import { useEffect, useState } from 'react'
import TextInputField from '../TextInputField'
import BottomRowFormButtons from './BottomRowFormButtons'
import DateRangePicker from '../DateRangePicker'

export default function EducationForm({ onAddItem, editingItem, onCloseForm }) {
    const [educationFormData, setEducationFormData] = useState({
        school: '',
        degree: '',
        start: '',
        end: '',
    })

    const handleInputChange = (field, value) => {
        setEducationFormData((prevData) => ({ ...prevData, [field]: value }))
    }

    useEffect(() => {
        if (editingItem) {
            setEducationFormData(editingItem)
        }
    }, [editingItem])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            ...educationFormData,
            id: educationFormData.id || crypto.randomUUID,
            visibility: educationFormData.visibility === false ? false : true,
        }

        onAddItem(newItem)
        onCloseForm()
    }

    const handleCloseForm = () => {
        setEducationFormData({
            school: '',
            degree: '',
            start: '',
            end: '',
        })
        onCloseForm()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="container"
        >
            <h2>Education</h2>
            <TextInputField
                id="school"
                label="School"
                value={educationFormData.school}
                onChange={handleInputChange}
            />
            <TextInputField
                id="degree"
                label="Degree"
                value={educationFormData.degree}
                onChange={handleInputChange}
            />
            <DateRangePicker
                startId="start"
                endId="end"
                startValue={educationFormData.start}
                endValue={educationFormData.end}
                onChange={handleInputChange}
                editingItem={editingItem}
            />
            <BottomRowFormButtons
                isEditing={editingItem}
                onCloseForm={handleCloseForm}
            />
        </form>
    )
}

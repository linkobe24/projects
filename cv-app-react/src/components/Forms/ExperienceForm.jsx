import { useState, useEffect } from 'react'
import TextInputField from '../TextInputField'
import BottomRowFormButtons from './BottomRowFormButtons'
import DateRangePicker from '../DateRangePicker'

export default function ExperienceForm({
    onAddItem,
    editingItem,
    onCloseForm,
}) {
    const [experienceFormData, setExperienceFormData] = useState({
        company: '',
        job: '',
        start: '',
        end: '',
        description: '',
    })

    const handleInputChange = (field, value) => {
        setExperienceFormData((prevData) => ({ ...prevData, [field]: value }))
    }

    useEffect(() => {
        if (editingItem) {
            setExperienceFormData(editingItem)
        }
    }, [editingItem])

    const handleSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            ...experienceFormData,
            id: experienceFormData.id || crypto.randomUUID,
            visibility: true,
        }

        onAddItem(newItem)
        onCloseForm()
    }

    const handleCloseForm = () => {
        setExperienceFormData({
            company: '',
            job: '',
            start: '',
            end: '',
            description: '',
        })
        onCloseForm()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="container"
        >
            <TextInputField
                id="company"
                label="Company Name"
                value={experienceFormData.company}
                onChange={handleInputChange}
            />
            <TextInputField
                id="job"
                label="Job Title"
                value={experienceFormData.job}
                onChange={handleInputChange}
            />
            <DateRangePicker
                startId="start"
                endId="end"
                startValue={experienceFormData.start}
                endValue={experienceFormData.end}
                onChange={handleInputChange}
                editingItem={editingItem}
            />

            <TextInputField
                id="description"
                label="Description"
                type="textarea"
                value={experienceFormData.description}
                onChange={handleInputChange}
            />

            <BottomRowFormButtons
                onCloseForm={handleCloseForm}
                isEditing={editingItem}
            />
        </form>
    )
}

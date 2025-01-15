import { useState } from 'react'
import EducationForm from './components/Forms/EducationForm'
import ExperienceForm from './components/Forms/ExperienceForm'
import PersonalDetails from './components/PersonalDetails'
import CollapsableMenu from './components/CollapsableMenu/CollapsableMenu'
import CVRender from './components/CVRender/CVRender'

import {
    initialEducationData,
    initialExperienceData,
    initialPersonalData,
} from './initialData'

export default function App() {
    const [personalData, setPersonalData] = useState(initialPersonalData)

    const [educationData, setEducationData] = useState(initialEducationData)
    const [experienceData, setExperienceData] = useState(initialExperienceData)

    const [editEducationItem, setEditEducationItem] = useState(null)
    const [editExperienceItem, setEditExperienceItem] = useState(null)

    // Education CRUD
    function handleAddEducationItem(item) {
        const itemId = item.id
        const idExists = educationData.some((item) => item.id === itemId)

        if (!idExists) {
            setEducationData((items) => [...items, item])
        } else {
            setEducationData((prevItems) =>
                prevItems.map((prevItem) =>
                    prevItem.id === itemId ? { ...prevItem, ...item } : prevItem
                )
            )
        }
    }

    function handleDeleteEducationItem(id) {
        setEducationData((items) => items.filter((item) => item.id != id))
    }

    // Experience CRUD
    function handleAddExperienceItem(item) {
        const itemId = item.id
        const idExists = experienceData.some((item) => item.id === itemId)

        if (!idExists) {
            setExperienceData((items) => [...items, item])
        } else {
            setExperienceData((prevItems) =>
                prevItems.map((prevItem) =>
                    prevItem.id === itemId ? { ...prevItem, ...item } : prevItem
                )
            )
        }
    }

    function handleDeleteExperienceItem(id) {
        setExperienceData((items) => items.filter((item) => item.id != id))
    }

    // shared handlers
    function handleClickEditEducationItem(id) {
        setEditEducationItem(educationData.filter((item) => item.id == id)[0])
        handleShowEducationForm()
    }

    function handleClickEditExperienceItem(id) {
        setEditExperienceItem(experienceData.filter((item) => item.id == id)[0])
        handleShowExperienceForm()
    }

    // show forms logic
    const [showEducationForm, setShowEducationForm] = useState(false)
    const [showExperienceForm, setShowExperienceForm] = useState(false)

    function handleShowEducationForm() {
        setShowEducationForm(true)
        setShowExperienceForm(false)
    }

    function handleShowExperienceForm() {
        setShowExperienceForm(true)
        setShowEducationForm(false)
    }

    function handleCloseForm() {
        setShowEducationForm(false)
        setShowExperienceForm(false)

        setEditEducationItem(null)
        setEditExperienceItem(null)
    }

    // visbility
    function handleOnShowEducationItem(id) {
        setEducationData((prevItems) =>
            prevItems.map((prevItem) =>
                prevItem.id === id
                    ? { ...prevItem, visibility: !prevItem.visibility }
                    : prevItem
            )
        )
    }

    function handleOnShowExperienceItem(id) {
        setExperienceData((prevItems) =>
            prevItems.map((prevItem) =>
                prevItem.id === id
                    ? { ...prevItem, visibility: !prevItem.visibility }
                    : prevItem
            )
        )
    }

    //clear the initial data
    function handleClear() {
        setPersonalData({})
        setEducationData([])
        setExperienceData([])
    }

    function handleLoadExampleData() {
        setPersonalData(initialPersonalData)
        setEducationData(initialEducationData)
        setExperienceData(initialExperienceData)
    }

    return (
        <div className="app">
            <main>
                <div className="pair-btns">
                    <button
                        className="clear"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                    <button
                        className="load"
                        onClick={handleLoadExampleData}
                    >
                        Load example data
                    </button>
                </div>
                <PersonalDetails
                    personalData={personalData}
                    setPersonalData={setPersonalData}
                />

                {showEducationForm ? (
                    <EducationForm
                        onAddItem={handleAddEducationItem}
                        editingItem={editEducationItem}
                        onCloseForm={handleCloseForm}
                    />
                ) : (
                    <CollapsableMenu
                        section="Education"
                        data={educationData}
                        onClickEditItem={handleClickEditEducationItem}
                        onDeleteItem={handleDeleteEducationItem}
                        onShowForm={handleShowEducationForm}
                        onShowItem={handleOnShowEducationItem}
                    />
                )}

                {showExperienceForm ? (
                    <ExperienceForm
                        onAddItem={handleAddExperienceItem}
                        editingItem={editExperienceItem}
                        onCloseForm={handleCloseForm}
                    />
                ) : (
                    <CollapsableMenu
                        section="Experience"
                        data={experienceData}
                        onClickEditItem={handleClickEditExperienceItem}
                        onDeleteItem={handleDeleteExperienceItem}
                        onShowForm={handleShowExperienceForm}
                        onShowItem={handleOnShowExperienceItem}
                    />
                )}
            </main>
            <CVRender
                personalData={personalData}
                educationData={educationData}
                experienceData={experienceData}
            />
        </div>
    )
}

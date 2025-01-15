import TextInputField from './TextInputField'

export default function PersonalDetails({ personalData, setPersonalData }) {
    const handleInputChange = (field, value) => {
        setPersonalData((prevData) => ({ ...prevData, [field]: value }))
    }

    return (
        <div className="container main-content">
            <h2>Personal Details</h2>
            <TextInputField
                id="name"
                label="Full Name"
                value={personalData.name || ''}
                onChange={handleInputChange}
            />
            <TextInputField
                id="email"
                label="Email"
                value={personalData.email || ''}
                onChange={handleInputChange}
            />
            <TextInputField
                id="phone"
                label="Phone Number"
                value={personalData.phone || ''}
                onChange={handleInputChange}
            />
            <TextInputField
                id="city"
                label="City"
                value={personalData.city || ''}
                onChange={handleInputChange}
            />
        </div>
    )
}

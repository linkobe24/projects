import { EmailIcon, PhoneIcon, LocationIcon } from '../Icons/Icons'

export default function Header({ personalData }) {
    return (
        <div className="header">
            <p className="name">{personalData.name}</p>
            <div className="personal-info">
                {personalData.email ? (
                    <p>
                        <EmailIcon />
                        {personalData.email}
                    </p>
                ) : (
                    <p></p>
                )}
                {personalData.phone ? (
                    <p>
                        <PhoneIcon />
                        {personalData.phone}
                    </p>
                ) : (
                    <p></p>
                )}
                {personalData.city ? (
                    <p>
                        <LocationIcon />
                        {personalData.city}
                    </p>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    )
}

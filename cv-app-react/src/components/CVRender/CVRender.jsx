import Header from './Header'
import Section from './Section'

export default function CVRender({
    personalData,
    educationData,
    experienceData,
}) {
    return (
        <div className="letter-paper">
            <Header personalData={personalData} />
            {educationData.length > 0 && (
                <Section
                    title="Education"
                    data={educationData}
                />
            )}

            {experienceData.length > 0 && (
                <Section
                    title="Experience"
                    data={experienceData}
                />
            )}
        </div>
    )
}

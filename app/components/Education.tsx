import { EducationInfo } from "@/data/data";

export const Education = () => {
    return (
        <div className="rounded-2xl overflow-hidden bg-fiery-red shadow-2xl p-6 mb-6">
            <p className="mb-4 font-bold">Education</p>
            {
                EducationInfo.map((education, idx) =>
                    <div key={idx} className={`text-lg ${idx !== EducationInfo.length - 1 ? "mb-4" : null}`}>
                        <p className="font-semibold">{education.title}</p>
                        <p>{education.institute}</p>
                        <p>{education.duration}</p>
                    </div>
                )
            }
        </div>
    )
};
import ExperienceBox from "./experience-box";

export default function ExperiencesSection() {
    return (
        <div className="w-full bg-black py-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl pb-8">
                    Work Experience
                </h1>
                <div className="flex flex-col items-center gap-4 p-4">
                    <ExperienceBox 
                        role={"Software Developer Intern"} 
                        company={"National Informatics Center"} 
                        companyLogoURL={"/company-logo/nic.svg"}
                        startDate={"19th May 2026"} 
                        endDate={"3rd July 2026"} 
                        description={"During my internship at the National Informatics Center, I worked alongside a 12-person team to build a full-stack MIS reporting platform using Spring Boot, React, and PostgreSQL. My core focus was optimizing database performance for fast data retrieval and developing a dynamic React frontend that seamlessly adapts to complex enterprise report structures."}
                    />
                </div>

            </div>
        </div>
    
    );    
}
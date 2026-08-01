export default function ExperienceBox({ role, company, companyLogoURL, startDate, endDate, description }) {
    return (
        <div className="relative flex flex-col p-4 min-h-80 bg-neutral-900 rounded-xl hover:scale-105 transition duration-200 ease-out overflow-auto">
            
            <div className="flex flex-row justify-between">
                <img className="w-24 p-2" src={companyLogoURL} key={companyLogoURL}/>
                <div className="mt-2 sm:mt-0">
                    <span className="inline-block rounded bg-gray-700 px-2.5 py-1 text-xs font-medium text-gray-300">
                        {startDate} — {endDate}
                    </span>
                </div>
            </div>

            <div className="flex flex-col">
                <h3 className="mt-4 text-lg font-bold text-white">
                    {role}
                </h3>
                <h3 className="mt-4 text-md font-semibold">
                    {company}
                </h3>
                
            </div>
            
            <p className="p-2 max-w-xl text-sm text-gray-400 overflow-auto">
                {description}
            </p>
            
        </div>
    );
}
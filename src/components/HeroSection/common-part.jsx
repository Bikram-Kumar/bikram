import { IconArrowDown, IconBrandGithubFilled, IconFileCv } from "@tabler/icons-react";
import Link from "next/link";

const resumeLink = "https://drive.google.com/file/d/1ALFByN3DQRVcGTLALC7QizATa0hp1xGg/view?usp=drive_link";

export function HeroSceneCommonPart() {
    return (
        <>
            <div className="w-full max-w-96 relative px-4 mt-24">
                <Link className="absolute left-0 px-8 py-1 bg-gray-800 rounded-3xl text-slate-100 text-xs sm:text-sm" href="https://github.com/Bikram-Kumar">
                    GitHub <IconBrandGithubFilled className="inline size-4"/>
                </Link>
                <Link className="absolute right-0 px-8 py-1 bg-blue-500 rounded-3xl text-slate-100 text-xs sm:text-sm" href={resumeLink}>
                    Resume <IconFileCv className="inline size-4"/>
                </Link>
                
            </div>

            <IconArrowDown className="absolute bottom-3 animate-bounce"/>

        </>
    );
}
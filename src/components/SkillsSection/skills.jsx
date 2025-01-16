import SkillBox from "./skill-box";
import LanguageProficiencies from "./language-proficiencies";

const skillSet = [
    "react",
    "nextjs",
    "java",
    "androidstudio",
    "express",
    "cpp",
    "flutter",
    "postgresql",
    "php",
    "csharp",
    "python",
    "tailwindcss",
    "nodejs",
    "mongodb",
    "javascript",
    "html5",
    "css3",
    "bash",
    "git",
    "docker",
    "cmake",
    "c",
    "gradle",
    "dart"
];

export default function SkillsSection() {
    return (
        <div className="w-full bg-black py-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl mb-8">
                    Skills
                </h1>

                {/* <div className="flex w-full overflow-hidden flex-nowrap">
                    <div className="flex flex-nowrap flex-none basis-full animate-infinite-scroll space-x-8">
                        {skillSet.map((skill) => <img className="size-12" src={"/icons/" + skill + ".svg"}/>)}
                    </div>
                    <div className="flex flex-nowrap flex-none basis-full animate-infinite-scroll space-x-8" aria-hidden="true">
                        {skillSet.map((skill) => <img className="size-12" src={"/icons/" + skill + ".svg"}/>)}
                    </div>
                </div> */}
         
                {/* <LanguageProficiencies /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

                    <SkillBox heading={"General Programming"} skills={["cpp", "javascript", "java"]} desc="I love programming to solve real life problems." />
                    <SkillBox heading={"Web Development"} skills={["nextjs", "react", "express", "mongodb", "postgresql", "mysql", "tailwindcss"]} desc="I create scalable full stack apps that use latest tools." />
                    <SkillBox heading={"Android Development"} skills={["java", "gradle", "androidstudio"]} desc="I create Android Apps for day-to-day use." />
                    <SkillBox heading={"Cross Platform Development"} skills={["flutter", "dart"]} desc="As a cross platform developer, I create apps that work equally well on multiple platforms like Android, Windows, iOS, Web." />
                    <SkillBox heading={"Game Development"} skills={["unity", "csharp", "unrealengine", "cpp"]} desc="I create video games in my free time." />
                    <SkillBox heading={"Tools & Technologies"} skills={["git", "bash", "powershell", "docker", "visualstudio", "vscode"]} desc="I utilize varieties of tools and technologies to help accelerate my workflow." />

                   
                </div>

                <div className="grid grid-cols-5 gap-8 p-8 bg-neutral-900 rounded-xl">
                    {skillSet.map((skill) => <img key={skill} className="size-16" src={"/icons/" + skill + ".svg"}/>)}
                </div>
            </div>
        </div>
    );    
}
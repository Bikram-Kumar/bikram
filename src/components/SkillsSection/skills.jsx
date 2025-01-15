import StackIcon from "tech-stack-icons";
import SkillBox from "./skill-box";
import LanguageProficiencies from "./language-proficiencies";

const skillSet = [
    "reactjs",
    "nextjs2",
    "java",
    "android",
    "c++",
    "flutter",
    "postgresql",
    "php",
    "csharp",
    "python",
    "tailwindcss",
    "nodejs",
    "mongodb",
    "js",
    "html5",
    "css3",
    "bash",
    "git",
    "docker",
    "dart"
];

export default function SkillsSection() {
    return (
        <div className="w-full bg-black py-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl mb-8">
                    Skills
                </h1>
         
                {/* <LanguageProficiencies /> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">

                    <SkillBox heading={"Full Stack Development"} skills={["nextjs2", "reactjs", "mongodb", "postgresql", "mysql"]} desc="I create scalable full stack apps that using latest tools." />
                    <SkillBox heading={"Cross Platform Development"} skills={["flutter", "dart", "android"]} desc="As a cross platform developer, I create apps that work equally well on multiple platforms like Android, Windows, iOS, Web." />
                    <SkillBox heading={"Tools & Technologies"} skills={["git", "bash", "powershell", "docker", "vscode"]} desc="I utilize varieties of tools and technologies to help accelerate my workflow." />

                   
                </div>

                <div className="grid grid-cols-5 gap-8 p-4">
                    {skillSet.map((skill) => <StackIcon className="size-16" name={skill}/>)}
                </div>
            </div>
        </div>
    );    
}
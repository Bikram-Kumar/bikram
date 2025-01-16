import ProjectBox from "./project-box";

export default function ProjectsSection() {
    return (
        <div className="w-full bg-neutral-950 pt-8">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl pb-8">
                    Projects
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    <ProjectBox name="ControlBoard" img="/images/controlboard.jpg" url="https://github.com/Bikram-Kumar/ControlBoard" desc="A PC keyboard for Android with all keys." skills={["java", "gradle", "androidstudio", "bash"]} />
                    <ProjectBox name="Fooduck" img="/images/fooduck.png" url="https://github.com/Bikram-Kumar/fooduck" desc="A cross-platform app to manage and find food recipes." skills={["flutter", "dart"]} />
                    <ProjectBox name="Bad Apple" img="/images/bad-apple.png" url="https://github.com/Bikram-Kumar/BadAppleWithMazes" desc="Render of Bad Apple With Mazes" skills={["html5", "css3", "javascript"]} />
                    <ProjectBox name="Netflix Bot" img="/icons/python.svg" url="https://github.com/Bikram-Kumar/NetflixBot" desc="A chatbot that tells you about Netflix shows." skills={["python"]} />
                    <ProjectBox name="DStruct" img="/icons/c.svg" url="https://github.com/Bikram-Kumar/DStruct" desc="Data structures library for C" skills={["c", "cmake"]} />
                    <ProjectBox name="GamIsland" img="/images/gamisland.png" url="https://gamisland.onrender.com" desc="A place for the games I create in my free time." skills={["php", "javascript", "postgresql"]} />
                </div>

            </div>
        </div>
    
    );    
}
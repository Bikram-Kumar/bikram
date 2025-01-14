'use-client';
import Image from "next/image";
import Revealer from "../ui/revealer";


export default function AboutSection() {
    return (
        <div className="w-full bg-neutral-950 pt-8">
            <h1 className="text-4xl text-center mb-8">
                About
            </h1>
            <div className="flex flex-col items-center">
                <Revealer>
                    <Image
                        src="/images/bikram.jpg"
                        alt="Bikram"
                        width={900}
                        height={1600}
                        className="relative rounded-full w-60 h-60 object-cover"
                    />
                </Revealer>
                <Revealer>
                    <p className="w-full max-w-xl my-8">
                            Hi there, I am Bikram Kumar, a 2nd-year Computer Science undergraduate at the National Institute of Technology Agartala, with a strong passion for programming and software development.
                            Beginning my programming journey in high school, I have worked on innovative projects like ControlBoard and Fooduck, showcasing my ability to design impactful, real-world solutions. Proficient in cross-platform and full-stack development, I am skilled in technologies such as Flutter, Android SDK, Express.js, and React. I also have a solid foundation in computer architecture, software engineering principles, and algorithmic problem-solving, enabling me to create efficient and scalable solutions.
                    </p>
                </Revealer>

            </div>
        </div>
    );    
}
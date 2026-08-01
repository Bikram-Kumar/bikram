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
                        src="/images/bikram.png"
                        alt="Bikram"
                        width={900}
                        height={1600}
                        className="relative rounded-full w-60 h-60 object-cover"
                    />
                </Revealer>
                <Revealer>
                    <p className="w-full max-w-xl my-8 px-4 font-serif">
                            I am Bikram Kumar, a final-year Computer Science undergraduate at NIT Agartala. Over the past six years, I have focused heavily on software development, most recently working as a Software Developer Intern at the National Informatics Centre (NIC). 

I place a strong emphasis on problem-solving and building independent products. Alongside holding an 1820+ contest rating on LeetCode, my core projects include Momentz (a social media application), Skyte Messenger (a real-time chat platform), and ControlBoard (a PC keyboard for Android). Building these applications from scratch has given me practical experience in software architecture, state management, and end-to-end delivery.

Technically, my focus is on full-stack and cross-platform development using Flutter, the Android SDK, React, Express.js, and Spring Boot. Grounded in a solid foundation of computer architecture, software engineering principles, and core computer science concepts, my goal is always to write clean, maintainable, and scalable code.
                    </p>
                </Revealer>

            </div>
        </div>
    );    
}
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { BackgroundLines } from "./background-lines";



export function HeroLines () {
    return (
        <BackgroundLines className="flex items-center justify-center w-full h-svh flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Bikram Kumar, <br /> Software Developer.
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Transforming complexity into simplicity, <br/> one algorithm at a time.
            </p>
        </BackgroundLines>
    );
}




export function HeroBeams () {
    return (
        <BackgroundBeamsWithCollision className="flex items-center justify-center w-full h-svh flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Bikram Kumar,<br/>
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        <span className="">Software Developer</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                        <span className="">Software Developer</span>
                    </div>
                </div>
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                Solving real world problems <br/> with innovative software solutions.
            </p>
        </BackgroundBeamsWithCollision>
    );
}
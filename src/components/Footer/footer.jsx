import Link from "next/link";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react";

export default function Footer() {
    return (
        <div className="flex flex-col items-center w-full h-96 bg-black pt-8">
            <h1 className="text-4xl">
                Let's get in touch!
            </h1>

            <div className="flex flex-col justify-center mt-16">
                <Link href="https://github.com/Bikram-Kumar">
                    <IconBrandGithubFilled className="inline size-4"/> GitHub 
                </Link>
                <br />
                <Link href="https://linkedin.com/in/kr-bikram">
                    <IconBrandLinkedinFilled className="inline size-4"/> Linkedin 
                </Link>
                <br />
                <Link href="mailto:krbikram0@gmail.com">
                    <IconMailFilled className="inline size-4"/> Email me
                </Link>
            </div>
  
        </div>
    );    
}
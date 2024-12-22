import { HeroBeams, HeroLines } from "@/components/ui/hero-scenes";



export default function Home() {
  var rnum = Math.random();
  return (
    <>

      {(rnum < 0.33) ? <HeroLines/> : ((rnum < 0.66) ? <HeroBeams/> : <HeroLines/>)}

    </>
  );
}


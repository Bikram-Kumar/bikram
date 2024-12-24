import { HeroBeams, HeroDot, HeroLines } from "@/components/ui/hero-scenes";

export const dynamic = 'force-dynamic';

export default async function Home() {
  var rnum = Math.random();
  return (
    <>

      {(rnum < 0.33) ? <HeroLines/> : ((rnum < 0.66) ? <HeroBeams/> : <HeroDot/>)}

    </>
  );
}


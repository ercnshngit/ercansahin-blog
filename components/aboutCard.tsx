import Image from 'next/future/image';

import ercanImage from '@/public/ercan.png';
import Socials from '@/components/socials';

export default function AboutCard() {
  return (
    <div className="flex md:justify-end justify-around items-center p-4 md:min-w-[700px] md:w-auto w-full">
      <div className="mr-4 ">
        <h1 className="mb-1 text-4xl font-bold tracking-tight text-black md:text-lg transition-on click-effect dark:text-white">
          Ercan Şahin
        </h1>
        <p className="mb-2 text-xl text-black md:text-sm dark:text-white transition-on click-effect">
          Frontend Developer
        </p>
        <Socials />
      </div>
      <Image
        className="w-40 h-40 rounded-full md:w-20 md:h-20 transition-on click-effect grayscale hover:filter-none"
        src={ercanImage}
        alt="Picture of the author"
      />
    </div>
  );
}

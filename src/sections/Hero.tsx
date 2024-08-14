import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_100%)] pb-20 pt-8 md:overflow-x-clip md:pb-10 md:pt-5">
      <div className="container">
        <div className="md:flex md:items-center">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="md:tex-7xl mt-6 bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010d3e]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span> <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:relative md:mt-0 md:h-[648px] md:flex-1">
            <Image
              src={cogImage}
              alt="Cog Image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
            />
            <Image
              className="hidden md:absolute md:-left-32 md:-top-8 md:block"
              src={cylinderImage}
              width={220}
              height={220}
              alt="Cylinder Image"
            />
            <Image
              src={noodleImage}
              alt="Noodle Image"
              width={220}
              className="hidden lg:absolute lg:left-[448px] lg:top-[524px] lg:block lg:rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

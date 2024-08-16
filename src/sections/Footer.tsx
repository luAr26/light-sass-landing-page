import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPinterest from "@/assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        <div className="before:content-[' '] relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:blur">
          <Image src={Logo} alt="Sass Logo" height={40} className="relative" />
        </div>
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Customers</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Help</Link>
          <Link href="/">Careers</Link>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
          <SocialX />
          <SocialYoutube />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPinterest />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

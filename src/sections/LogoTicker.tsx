"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmeLogo} className="logo-ticker-image" alt="Acme" />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="Quantum"
            />
            <Image src={echoLogo} className="logo-ticker-image" alt="Echo" />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="Celestial"
            />
            <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse" />
            <Image src={apexLogo} className="logo-ticker-image" alt="Apex" />

            {/* !!! Second set of logos for animation */}
            <Image src={acmeLogo} className="logo-ticker-image" alt="Acme" />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="Quantum"
            />
            <Image src={echoLogo} className="logo-ticker-image" alt="Echo" />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="Celestial"
            />
            <Image src={pulseLogo} className="logo-ticker-image" alt="Pulse" />
            <Image src={apexLogo} className="logo-ticker-image" alt="Apex" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

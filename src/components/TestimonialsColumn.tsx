import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface columnData {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

function TestimonialsColumn({
  columnData,
  className,
  duration,
}: {
  columnData: columnData[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{ translateY: "-50%" }}
        transition={{
          repeat: Infinity,
          duration: duration || 10,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {columnData.map(({ text, imageSrc, name, username }, index) => (
              <div key={index} className="card">
                <div>{text}</div>
                <div className="mt-5 flex items-center gap-2">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default TestimonialsColumn;

import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface columnData {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

function TestimonialsColumn({
  columnData,
  className,
}: {
  columnData: columnData[];
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "mt-10 flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
        className,
      )}
    >
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
              <div className="font-medium leading-5 tracking-tight">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsColumn;

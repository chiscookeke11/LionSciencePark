import { ServiceDataType } from "@/Types/types";
import Image from "next/image";

interface MobileServiceCardProps {
  data: ServiceDataType;
}

export function MobileServiceCard({ data }: MobileServiceCardProps) {
  return (
    <div className="md:hidden w-full rounded-3xl overflow-hidden border border-black">
      <div className="h-[220px]">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 bg-[#00BFA6] text-[#0a0a0a]">
        <h2 className="text-lg font-onest font-semibold mb-2">
          {data.title}
        </h2>
        <p className="text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Logo(): JSX.Element {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center space-x-2">
        <Image
          src="/imgs/yanai-lab.png"
          alt="yanai lab logo"
          width={41.44}
          height={48}
        />
        <div className="font-bold text-2xl md:text-xl text-slate-800">
          計量政治経済研究室
        </div>
      </div>
    </Link>
  );
}

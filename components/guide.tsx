import Link from "next/link";

export default function Guide(): JSX.Element {
  return (
    <div className="">
      <div className="mb-8">
        <p className="font-bold text-2xl text-center">最新の研究成果</p>
      </div>
      <div className="w-fit mx-auto">
        <Link href="/research" className="font-bold hover:text-[#1B7AFE]">
          すべての論文を見る &rarr;
        </Link>
      </div>
    </div>
  );
}

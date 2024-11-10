import { motion } from "framer-motion";
import Link from "next/link";

export default function Cover(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 h-fit w-full px-4 py-4 md:py-8">
      <div className="w-fit mx-auto space-y-2 mb-8">
        <div className="text-slate-800 font-bold text-4xl md:text-4xl">
          統計で紐解く
          <br />
          経済と政治の真実
        </div>
        <div className="text-slate-800 text-lg md:text-xl">
          最新の統計手法を駆使し、社会科学の新たな地平を切り拓きます
        </div>
      </div>
      <div className="w-fit mx-auto">
        <Link href="/research">
          <motion.div
            className="bg-[#1B7AFE] hover:bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            研究テーマを見る
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

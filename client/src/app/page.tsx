import PairPreview from "@/components/PairPreview";
import SearchPairForm from "../components/SearchPairForm";
import { Activity, TrendingUp, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="relative py-10 sm:py-14">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 flex flex-col items-center gap-3">
            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              Market <span className="text-indigo-400">Masters</span>
            </h1>
          </div>

          <p className="max-w-lg text-base text-zinc-400 sm:text-lg">
            Discover the smartest traders in the cryptocurrency market
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              <Activity className="h-3.5 w-3.5 text-indigo-400" />
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              <TrendingUp className="h-3.5 w-3.5 text-indigo-400" />
              <span>Profit Tracking</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
              <span>Smart Discovery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <SearchPairForm />
      </section>

      <section className="mb-10">
        <PairPreview />
      </section>
    </div>
  );
}

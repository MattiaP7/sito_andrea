import Timeline from "@/components/ui/Timeline";
import { timelineItems } from "@/data/timelineItems";

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Percorso Professionale
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          Una carriera ricca di formazione, esperienze e specializzazioni nel
          campo della geometria, sicurezza e ricostruzione post-sismica
        </p>
      </div>

      <Timeline
        items={timelineItems}
        className="mt-12"
        iconClassName="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
        lineClassName="bg-blue-200 dark:bg-blue-800"
      />
    </div>
  );
}

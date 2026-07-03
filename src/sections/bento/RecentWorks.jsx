import { ArrowRight } from 'lucide-react';
import ProjectCard from '../../components/ProjectCard';
import BentoIcon from '../../components/illustrations/BentoIcon';

export default function RecentWorks() {
  return (
    <section className="pb-20">
      <div className="container-page">
        <div className="flex items-start justify-between mb-4">
          <p className="text-xs font-semibold text-ink/40">04. You may also like</p>
          <button className="grid h-9 w-9 place-items-center rounded-full bg-primary-500 text-white">
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Recent Works</h2>
          <p className="max-w-sm text-sm text-ink/50">
            Agency is a full-service agency, busy designing and building beautiful digital
            products, brands, and experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Bento 3D Illustration"
            description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            bg="bg-amber/70"
            art={<BentoIcon className="h-28" sphere="#5457E5" />}
            className="min-h-[260px]"
          />
          <ProjectCard
            title="Bento Vol. 3"
            description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            bg="bg-sky/60"
            art={<BentoIcon className="h-28" sphere="#F7A8C4" />}
            className="min-h-[260px]"
          />
        </div>
      </div>
    </section>
  );
}

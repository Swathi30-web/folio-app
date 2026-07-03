import { ArrowRight } from 'lucide-react';
import Eyebrow from '../../components/Eyebrow';
import MonitorArt from '../../components/illustrations/MonitorArt';

const JOBS = [
  { title: 'Graphic Designer', exp: '5 years experience', active: false },
  { title: 'Visual Designer', exp: '2 years experience', active: true },
  { title: 'Art Director', exp: '2 years experience', active: false },
  { title: 'Web Designer', exp: '3 years experience', active: false },
];

export default function Jobs() {
  return (
    <section id="jobs" className="bg-mist py-20">
      <div className="container-page grid lg:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <Eyebrow index="06" label="We are Hiring" />
          <h2 className="font-display text-4xl font-bold mb-4">Jobs</h2>
          <p className="text-ink/50 text-sm max-w-xs mb-8">
            Agency is a full-service agency, busy designing and building beautiful digital
            products, brands, and experiences.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            Available Jobs
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className={`rounded-2xl p-6 flex items-center justify-between transition-transform hover:-translate-y-0.5
                ${job.active ? 'bg-ink text-white' : 'bg-white text-ink shadow-card'}`}
            >
              {job.active && (
                <MonitorArt className="hidden sm:block w-24 -my-6 mr-4" screen="#EEF0FF" />
              )}
              <div className="flex-1">
                <h4 className="font-display font-bold flex items-center gap-2">
                  {job.title}
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      job.active ? 'bg-amber' : 'bg-primary-500'
                    }`}
                  />
                </h4>
                <p className={`text-xs ${job.active ? 'text-white/50' : 'text-ink/40'}`}>
                  {job.exp}
                </p>
              </div>
              <button
                className={`grid h-9 w-9 place-items-center rounded-full ${
                  job.active ? 'bg-white text-ink' : 'bg-mist text-ink'
                }`}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

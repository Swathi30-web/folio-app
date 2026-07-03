import { Trophy } from 'lucide-react';
import Eyebrow from '../../components/Eyebrow';
import PhoneArt from '../../components/illustrations/PhoneArt';

export default function Achievement() {
  return (
    <section className="bg-mist pb-20">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div className="relative flex justify-center py-6">
          <div className="absolute h-64 w-64 rounded-full bg-blush/50 -z-10" />
          <PhoneArt className="w-48" />
        </div>

        <div>
          <Eyebrow index="03" label="Achievement" />
          <h3 className="font-display text-2xl sm:text-3xl font-bold max-w-sm mb-8">
            A design team building a curated marketplace for UI designers.
          </h3>

          <div className="flex items-center gap-3">
            <span className="font-display text-6xl font-extrabold text-primary-500">68</span>
          </div>
          <div className="flex items-center gap-2 text-ink/50 text-sm font-medium">
            <Trophy size={16} className="text-amber" />
            Successful Projects
          </div>
        </div>
      </div>
    </section>
  );
}

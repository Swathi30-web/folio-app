import { Link } from 'react-router-dom';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import ProjectCard from '../../components/ProjectCard';
import CharacterArt from '../../components/illustrations/CharacterArt';
import BentoIcon from '../../components/illustrations/BentoIcon';

export default function Partnerships() {
  return (
    <section id="work" className="py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <Eyebrow index="04" label="Famous Projects" />
          <Button as={Link} to="/contact" variant="dark">Contact Us</Button>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Our Partnerships</h2>
          <p className="max-w-sm text-sm text-ink/50">
            Agency is a full-service agency, busy designing and building beautiful digital
            products, brands, and experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <ProjectCard
            tag="Featured Product"
            title="Sapiens: The Free Character Builder App"
            description="Beautiful library of realistic, component-based character illustrations to use for your personal or client projects."
            bg="bg-sky/50"
            art={<CharacterArt className="h-40" />}
            className="lg:row-span-2 min-h-[420px]"
          />

          <div className="grid sm:grid-cols-2 gap-6">
            <ProjectCard
              title="Bento 3D Illustration"
              description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
              bg="bg-amber/70"
              art={<BentoIcon className="h-28" sphere="#5457E5" />}
              className="min-h-[240px]"
            />
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm font-bold text-right">Bento Vol. 2</span>
              <ProjectCard
                bg="bg-lavender/60"
                art={<BentoIcon className="h-28" sphere="#FDB847" />}
                className="min-h-[200px]"
                title=""
                description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
              />
            </div>
          </div>

          <ProjectCard
            title="Sapiens: Man"
            description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            bg="bg-blush/60"
            art={<CharacterArt className="h-28" />}
            className="min-h-[260px]"
          />

          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-bold text-right">Bento Vol. 3</span>
            <ProjectCard
              bg="bg-sky/60"
              art={<BentoIcon className="h-28" sphere="#F7A8C4" />}
              className="min-h-[220px]"
              title=""
              description="Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

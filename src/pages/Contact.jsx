import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';

const DETAILS = [
  { icon: Mail, label: 'Email', value: 'hello@folio.agency' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 012 3456' },
  { icon: MapPin, label: 'Studio', value: 'Chennai, Tamil Nadu, India' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this just gives the user feedback.
    setSent(true);
  };

  return (
    <div className="bg-white">
      <Navbar />

      <section className="container-page pt-2 pb-20">
        <Link
          to="/"
          className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-primary-500 text-white"
        >
          <ArrowLeft size={16} />
        </Link>

        <Eyebrow index="00" label="Get in touch" />
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4 max-w-lg">
          Let's talk about your next project.
        </h1>
        <p className="text-ink/50 max-w-md mb-14">
          Fill in the form and our team will get back to you within one business day, or reach
          us directly using the details below.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div className="flex flex-col gap-6">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-center gap-4 rounded-2xl bg-mist p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-primary-600 shadow-card shrink-0">
                  <d.icon size={18} />
                </span>
                <div>
                  <p className="text-xs text-ink/40">{d.label}</p>
                  <p className="text-sm font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white shadow-soft p-8">
            {sent ? (
              <div className="text-center py-10">
                <p className="font-display text-2xl font-bold mb-2">Message sent 🎉</p>
                <p className="text-ink/50 text-sm">
                  Thanks for reaching out — we'll be in touch soon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold text-ink/50 mb-2" htmlFor="name">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink/50 mb-2" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary-500 outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-ink/50 mb-2"
                    htmlFor="message"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about what you're building..."
                    className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-primary-500 outline-none resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full mt-2">
                  Send Message
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

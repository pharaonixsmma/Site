import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import logoUrl from '@assets/file_0000000028dc720ba9729351fb27a291_1783271991817.png';

const SERVICES = [
  'Website Development',
  'Social Media Management',
  'Digital Advertising',
  'Graphic Design',
  'Local SEO',
  'AI & Automation',
  'Customer Support Automation',
  'Booking Automation',
  'Not sure — advise me'
];

interface FormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: '', businessName: '', phone: '', email: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (form.name.length < 2) e.name = 'Name must be at least 2 characters';
    if (form.businessName.length < 2) e.businessName = 'Business name must be at least 2 characters';
    if (!/^\+?[\d\s\-]{8,}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.service) e.service = 'Please select a service';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`New Enquiry from ${form.name} — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.businessName}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}`
    );
    window.open(`mailto:hello@pharaonix.in?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 bg-card overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/15 blur-[120px] rounded-[100%] translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-6">05 / Contact</h2>
            <h3 className="font-serif italic font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] text-white mb-8">
              Let's create<br/>
              something<br/>
              extraordinary
            </h3>
            <p className="font-sans text-muted-foreground text-lg mb-10 max-w-sm leading-relaxed">
              Whether you have a specific project in mind or just want to know what's possible — book a free consultation and we'll map out the path.
            </p>

            <div className="space-y-4 font-mono text-sm text-white/50">
              <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>hello@pharaonix.in</span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>PHARAONIX on Instagram</span>
              </div>
              <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>WhatsApp available on enquiry</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-6 py-12">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <ArrowRight className="text-primary" size={24} />
                </div>
                <h4 className="font-serif italic text-3xl text-white">Enquiry sent.</h4>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We'll review your details and reach out within 24 hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', businessName: '', phone: '', email: '', service: '' }); }}
                  className="font-mono text-xs text-primary uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      data-testid="contact-input-name"
                      className={`w-full bg-background/60 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 font-sans text-sm px-5 py-4 rounded-sm focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                    {errors.name && <p className="font-mono text-xs text-red-400/80 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Business name"
                      value={form.businessName}
                      onChange={e => handleChange('businessName', e.target.value)}
                      data-testid="contact-input-business"
                      className={`w-full bg-background/60 border ${errors.businessName ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 font-sans text-sm px-5 py-4 rounded-sm focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                    {errors.businessName && <p className="font-mono text-xs text-red-400/80 mt-1">{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      data-testid="contact-input-phone"
                      className={`w-full bg-background/60 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 font-sans text-sm px-5 py-4 rounded-sm focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                    {errors.phone && <p className="font-mono text-xs text-red-400/80 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      data-testid="contact-input-email"
                      className={`w-full bg-background/60 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} text-white placeholder:text-white/30 font-sans text-sm px-5 py-4 rounded-sm focus:outline-none focus:border-primary/50 transition-colors`}
                    />
                    {errors.email && <p className="font-mono text-xs text-red-400/80 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <select
                    value={form.service}
                    onChange={e => handleChange('service', e.target.value)}
                    data-testid="contact-select-service"
                    className={`w-full bg-background/60 border ${errors.service ? 'border-red-500/50' : 'border-white/10'} text-white font-sans text-sm px-5 py-4 rounded-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-[#171717]">Select a service</option>
                    {SERVICES.map(s => (
                      <option key={s} value={s} className="bg-[#171717]">{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="font-mono text-xs text-red-400/80 mt-1">{errors.service}</p>}
                </div>

                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="group relative w-full px-8 py-5 rounded-sm bg-primary text-black font-mono text-sm tracking-widest uppercase overflow-hidden flex items-center justify-center gap-3 hover:text-black transition-colors"
                >
                  <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="relative z-10 font-bold">Book Free Consultation</span>
                  <ArrowRight className="relative z-10" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="PHARAONIX" className="w-8 h-8 rounded-full object-contain" />
            <span className="font-mono text-sm text-primary tracking-widest font-bold">PHARAONIX</span>
            <span className="font-mono text-xs text-white/30 tracking-wider">— From Vision to Victory.</span>
          </div>
          <div className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} PHARAONIX. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

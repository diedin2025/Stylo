import { useMemo, useState } from "react";

const providers = [
  {
    id: 1,
    name: "Jade Rowe",
    specialty: "Protective stylist",
    city: "Atlanta, GA",
    rating: 4.9,
    reviews: 187,
    price: "$95+",
    badge: "Background checked",
    vibe: "Soft glam braids, silk presses, bridal prep",
    about:
      "Five years of salon and on-location experience focused on healthy hair, punctual appointments, and calm client care.",
    services: ["Knotless braids", "Silk press", "Bridal styling"],
  },
  {
    id: 2,
    name: "Noor Bennett",
    specialty: "Beauty photographer",
    city: "Houston, TX",
    rating: 4.8,
    reviews: 124,
    price: "$140+",
    badge: "ID verified",
    vibe: "Brand shoots, beauty campaigns, content days",
    about:
      "Specializes in beauty-focused shoots for stylists, makeup artists, and creators who need polished portfolio content.",
    services: ["Mini campaign", "Brand content", "Lookbook session"],
  },
  {
    id: 3,
    name: "Mia Solis",
    specialty: "Lash and brow tech",
    city: "Chicago, IL",
    rating: 5.0,
    reviews: 92,
    price: "$65+",
    badge: "Studio verified",
    vibe: "Clean studio, sensitive-skin friendly, quick fills",
    about:
      "Known for natural sets, clear aftercare, and a fully verified studio setup with arrival check-in support.",
    services: ["Classic lashes", "Hybrid fill", "Brow lamination"],
  },
];

const trustSteps = [
  "Government ID review",
  "Face-match selfie check",
  "Portfolio and license upload",
  "Workspace safety checklist",
  "Client reporting and re-review",
];

const flowSteps = [
  { id: "discover", label: "Discover" },
  { id: "profile", label: "Profile" },
  { id: "booking", label: "Booking" },
  { id: "verify", label: "Verification" },
];

const glassCard =
  "rounded-[28px] border border-[rgba(108,84,68,0.10)] bg-[rgba(255,252,248,0.78)] p-7 shadow-glow backdrop-blur-xl md:p-8";

const labelClass = "text-[0.72rem] uppercase tracking-[0.14em] text-clay";
const pillClass =
  "rounded-full bg-white/80 px-3 py-2 text-sm text-ink shadow-[inset_0_0_0_1px_rgba(31,23,38,0.08)]";
const primaryButtonClass =
  "rounded-full bg-ink px-5 py-3.5 text-sm font-semibold text-[#fff6f0] shadow-[0_10px_24px_rgba(31,23,38,0.18)] transition hover:-translate-y-0.5";
const secondaryButtonClass =
  "rounded-full bg-white/75 px-5 py-3.5 text-sm font-semibold text-ink shadow-[inset_0_0_0_1px_rgba(31,23,38,0.08)] transition hover:-translate-y-0.5";

function App() {
  const [selectedProviderId, setSelectedProviderId] = useState(providers[0].id);
  const [activeStep, setActiveStep] = useState("discover");

  const selectedProvider = useMemo(
    () => providers.find((provider) => provider.id === selectedProviderId),
    [selectedProviderId]
  );

  return (
    <div className="relative min-h-screen overflow-hidden px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-[-80px] top-[120px] h-[220px] w-[220px] rounded-full bg-[rgba(222,140,92,0.28)] opacity-55 blur-xl" />
      <div className="pointer-events-none absolute bottom-[140px] left-[-80px] h-[260px] w-[260px] rounded-full bg-[rgba(75,118,104,0.20)] opacity-55 blur-xl" />

      <header className="relative z-10 mx-auto mb-7 flex max-w-[1180px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className={labelClass}>Prototype</p>
          <h1 className="font-display text-4xl leading-none md:text-5xl">
            Stylo
          </h1>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-[#5f5567]">
          <a href="#flow" className="transition hover:text-ink">
            Flow
          </a>
          <a href="#providers" className="transition hover:text-ink">
            Providers
          </a>
          <a href="#verify" className="transition hover:text-ink">
            Trust Center
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto grid max-w-[1180px] gap-6">
        <section
          className={`${glassCard} grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)]`}
        >
          <div>
            <p className={labelClass}>Safety-first beauty booking</p>
            <h2 className="max-w-[12ch] font-display text-5xl leading-[0.95] md:text-7xl">
              Find Vetted Beauty Pros in One Place and Book with More Confidence.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#625765] md:text-lg">
              This prototype brings stylists, photographers, and beauty techs into a
              single discovery flow, while highlighting identity checks, workspace
              verification, and safer booking signals for clients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className={primaryButtonClass}
                onClick={() => setActiveStep("discover")}
              >
                Explore providers
              </button>
              <button
                type="button"
                className={secondaryButtonClass}
                onClick={() => setActiveStep("verify")}
              >
                View verification
              </button>
            </div>
          </div>

          <div className="grid gap-3.5">
            <div className="grid gap-2 rounded-[22px] bg-gradient-to-br from-[rgba(255,246,236,0.96)] to-[rgba(241,230,221,0.8)] p-5">
              <span className={labelClass}>Verified providers</span>
              <strong className="text-3xl">1,200+</strong>
            </div>
            <div className="grid gap-2 rounded-[22px] bg-gradient-to-br from-[rgba(255,246,236,0.96)] to-[rgba(241,230,221,0.8)] p-5">
              <span className={labelClass}>Reported safety response</span>
              <strong className="text-3xl">&lt; 15 min</strong>
            </div>
            <div className="grid gap-2 rounded-[22px] bg-gradient-to-br from-[rgba(255,246,236,0.96)] to-[rgba(241,230,221,0.8)] p-5">
              <span className={labelClass}>Client trust score</span>
              <strong className="text-3xl">96%</strong>
            </div>
          </div>
        </section>

        <section id="flow" className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <div className={glassCard}>
            <p className={labelClass}>User flow</p>
            <div className="my-5 flex flex-wrap gap-2.5">
              {flowSteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  className={
                    step.id === activeStep
                      ? "flex items-center gap-2.5 rounded-full bg-ink px-4 py-3 text-sm font-medium text-[#fffaf7]"
                      : "flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-3 text-sm font-medium text-[#534857] shadow-[inset_0_0_0_1px_rgba(31,23,38,0.08)]"
                  }
                  onClick={() => setActiveStep(step.id)}
                >
                  <span
                    className={
                      step.id === activeStep
                        ? "inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white/20"
                        : "inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(31,23,38,0.08)]"
                    }
                  >
                    0{index + 1}
                  </span>
                  {step.label}
                </button>
              ))}
            </div>

            <div className="text-[#625765]">
              {activeStep === "discover" && (
                <div>
                  <h3 className="font-display text-4xl text-ink">
                    Discovery made simple
                  </h3>
                  <p>
                    Clients browse curated professionals by specialty, location,
                    pricing, and trust status without jumping between separate booking
                    sites.
                  </p>
                </div>
              )}

              {activeStep === "profile" && (
                <div>
                  <h3 className="font-display text-4xl text-ink">
                    Profiles that show more than pretty work
                  </h3>
                  <p>
                    Each provider profile combines service details, trust badges,
                    review volume, and studio or travel notes so clients can screen
                    for fit and safety at the same time.
                  </p>
                </div>
              )}

              {activeStep === "booking" && (
                <div>
                  <h3 className="font-display text-4xl text-ink">
                    Booking and payment placeholder
                  </h3>
                  <p>
                    The prototype includes a clear checkout card with service summary,
                    date selection, deposit note, and a future payment handoff area for
                    Stripe or another processor.
                  </p>
                </div>
              )}

              {activeStep === "verify" && (
                <div>
                  <h3 className="font-display text-4xl text-ink">
                    Trust center visibility
                  </h3>
                  <p>
                    Verification is positioned as a product feature, not a hidden
                    backend task, so both clients and providers understand how safety
                    standards are being handled.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className={glassCard}>
            <p className={labelClass}>Client profile</p>
            <h3 className="font-display text-4xl text-ink">Ariana Thomas</h3>
            <p className="text-[#625765]">Repeat client • Atlanta, GA</p>
            <div className="my-4 flex flex-wrap gap-2.5">
              <span className={pillClass}>Photo ID on file</span>
              <span className={pillClass}>Emergency contact added</span>
              <span className={pillClass}>Prefers women-only studios</span>
            </div>
            <p className="text-[#625765]">
              Client controls can include saved safety preferences, appointment
              history, check-in reminders, and verified reviews.
            </p>
          </div>
        </section>

        <section id="providers" className="grid gap-6 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)]">
          <div className={`${glassCard} grid gap-3.5`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className={labelClass}>Browse providers</p>
                <h3 className="font-display text-4xl text-ink">
                  Sample discovery feed
                </h3>
              </div>
              <span className={pillClass}>Verified only</span>
            </div>

            {providers.map((provider) => (
              <button
                key={provider.id}
                type="button"
                className={`flex w-full flex-col gap-3 rounded-[22px] px-4 py-4 text-left transition sm:flex-row sm:items-center sm:justify-between ${
                  provider.id === selectedProviderId
                    ? "bg-gradient-to-br from-ink to-[#443443] text-[#fff7f0]"
                    : "bg-white/60 text-ink shadow-[inset_0_0_0_1px_rgba(31,23,38,0.07)]"
                }`}
                onClick={() => {
                  setSelectedProviderId(provider.id);
                  setActiveStep("profile");
                }}
              >
                <div>
                  <h4 className="font-display text-3xl">{provider.name}</h4>
                  <p
                    className={
                      provider.id === selectedProviderId
                        ? "text-[rgba(255,247,240,0.78)]"
                        : "text-[#625765]"
                    }
                  >
                    {provider.specialty} • {provider.city}
                  </p>
                </div>
                <div className="grid gap-1 sm:justify-items-end">
                  <span
                    className={
                      provider.id === selectedProviderId
                        ? "text-sm text-[rgba(255,247,240,0.78)]"
                        : "text-sm text-[#625765]"
                    }
                  >
                    {provider.badge}
                  </span>
                  <strong>{provider.price}</strong>
                </div>
              </button>
            ))}
          </div>

          <div className={glassCard}>
            <p className={labelClass}>Stylist profile</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-5xl text-ink">
                  {selectedProvider.name}
                </h3>
                <p className="text-[#625765]">
                  {selectedProvider.specialty} • {selectedProvider.city}
                </p>
              </div>
              <span className={pillClass}>{selectedProvider.badge}</span>
            </div>

            <div className="my-5 grid gap-3 md:grid-cols-3">
              <div className="grid gap-1 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)]">
                <strong className="text-2xl">{selectedProvider.rating}</strong>
                <span className="text-sm text-[#625765]">Rating</span>
              </div>
              <div className="grid gap-1 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)]">
                <strong className="text-2xl">{selectedProvider.reviews}</strong>
                <span className="text-sm text-[#625765]">Reviews</span>
              </div>
              <div className="grid gap-1 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)]">
                <strong className="text-2xl">{selectedProvider.price}</strong>
                <span className="text-sm text-[#625765]">Starting at</span>
              </div>
            </div>

            <p className="font-semibold text-[#2f2237]">{selectedProvider.vibe}</p>
            <p className="text-[#625765]">{selectedProvider.about}</p>

            <div className="my-4 flex flex-wrap gap-2.5">
              {selectedProvider.services.map((service) => (
                <span key={service} className={pillClass}>
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-gradient-to-br from-[rgba(228,237,232,0.82)] to-[rgba(255,250,246,0.92)] p-6">
              <div>
                <p className={labelClass}>Booking placeholder</p>
                <h4 className="font-display text-3xl text-ink">
                  Reserve your appointment
                </h4>
              </div>
              <div className="my-4 grid gap-3 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-[#443847]">
                  Service
                  <select
                    className="w-full rounded-2xl border border-[rgba(68,56,71,0.12)] bg-white/85 px-4 py-3"
                    defaultValue={selectedProvider.services[0]}
                  >
                    {selectedProvider.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-[#443847]">
                  Date
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-[rgba(68,56,71,0.12)] bg-white/85 px-4 py-3"
                  />
                </label>
                <label className="grid gap-2 text-sm text-[#443847]">
                  Time
                  <input
                    type="time"
                    className="w-full rounded-2xl border border-[rgba(68,56,71,0.12)] bg-white/85 px-4 py-3"
                  />
                </label>
                <label className="grid gap-2 text-sm text-[#443847]">
                  Deposit
                  <input
                    type="text"
                    value="Payment integration coming soon"
                    readOnly
                    className="w-full rounded-2xl border border-[rgba(68,56,71,0.12)] bg-white/85 px-4 py-3 text-[#625765]"
                  />
                </label>
              </div>
              <button
                type="button"
                className={primaryButtonClass}
                onClick={() => setActiveStep("booking")}
              >
                Continue to checkout
              </button>
            </div>
          </div>
        </section>

        <section id="verify" className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className={glassCard}>
            <p className={labelClass}>Verification center</p>
            <h3 className="font-display text-4xl text-ink">
              Trust signals that are visible before a client books
            </h3>
            <div className="mt-5 grid gap-3">
              {trustSteps.map((step) => (
                <div
                  key={step}
                  className="flex flex-col gap-3 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[rgba(222,140,92,0.18)] font-extrabold text-[#8b4d2c]">
                    +
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={glassCard}>
            <p className={labelClass}>Provider verification page</p>
            <h3 className="font-display text-4xl text-ink">Verification status</h3>
            <div className="mt-5 grid gap-3">
              <div className="flex flex-col gap-2 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)] sm:flex-row sm:items-center sm:justify-between">
                <span>ID check</span>
                <strong>Approved</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)] sm:flex-row sm:items-center sm:justify-between">
                <span>Face match</span>
                <strong>Approved</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)] sm:flex-row sm:items-center sm:justify-between">
                <span>License upload</span>
                <strong>Pending review</strong>
              </div>
              <div className="flex flex-col gap-2 rounded-[20px] bg-white/75 p-4 shadow-[inset_0_0_0_1px_rgba(31,23,38,0.06)] sm:flex-row sm:items-center sm:justify-between">
                <span>Workspace safety</span>
                <strong>Scheduled</strong>
              </div>
            </div>
            <p className="mt-4 text-[#625765]">
              This screen is intentionally non-functional for the prototype, but it
              shows where onboarding and trust-review progress would live.
            </p>
            <button type="button" className={`${secondaryButtonClass} mt-4`}>
              Submit verification docs
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

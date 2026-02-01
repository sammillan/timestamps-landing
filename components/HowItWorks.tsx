const steps = [
  {
    number: "01",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
    title: "Capture in seconds",
    description:
      "Click the Stamp button on any YouTube video. We save the timestamp, title, thumbnail, and your note.",
  },
  {
    number: "02",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Organize & search",
    description:
      "Your stamps sync to collections. Search instantly. Build your personal knowledge library for YouTube.",
  },
  {
    number: "03",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    title: "Share & export",
    description:
      "Export to Notion, share as social media images, download as Markdown. One click, multiple formats.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Turn YouTube moments into
            <br />
            structured memory in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background-card border border-border mb-6">
                <span className="text-accent">{step.icon}</span>
              </div>

              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <span className="text-accent font-mono text-sm">
                  {step.number}
                </span>
                <span className="text-accent text-xl">⚡</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

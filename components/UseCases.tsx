const personas = [
  {
    icon: "🎓",
    title: "Students & Researchers",
    description:
      "Turn lecture recordings and YouTube tutorials into searchable notes. Review exactly what matters before exams.",
    quote:
      "My professor explained this concept perfectly at 42:15 in that lecture video.",
  },
  {
    icon: "✍️",
    title: "Writers & Creators",
    description:
      "Stop screenshotting timestamps. Save ideas from podcasts, interviews, and videos for your next article or video.",
    quote:
      "That guest on Joe Rogan had the perfect quote for my article.",
  },
  {
    icon: "🏋️",
    title: "Fitness Coaches",
    description:
      "Bookmark exercise demos, form cues, and mobility drills. Build your library of technique references.",
    quote: "I need that cue about scapular retraction from AthleanX.",
  },
  {
    icon: "💼",
    title: "Founders & Product People",
    description:
      "Save product insights and customer interviews before they vanish. Build your idea library from YouTube content.",
    quote:
      "I heard a great pricing strategy on Lenny's podcast last month. Where was it again?",
  },
];

export default function UseCases() {
  return (
    <section className="py-20 md:py-28 px-4 bg-background-card">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Your second brain for YouTube
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-background-main border border-border rounded-lg p-6 md:p-8
                         hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{persona.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  {persona.title}
                </h3>
              </div>

              <p className="text-text-secondary leading-relaxed mb-4">
                {persona.description}
              </p>

              <p className="text-accent italic text-sm border-l-2 border-accent pl-4">
                "{persona.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

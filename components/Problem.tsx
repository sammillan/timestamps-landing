const problems = [
  {
    icon: "📑",
    title: "Browser bookmarks",
    description:
      "You bookmark a 2-hour tutorial. Good luck finding that one moment 3 months later.",
  },
  {
    icon: "📝",
    title: "Taking notes manually",
    description:
      "Pausing to copy URLs and write timestamps kills your flow. You never look at them anyway.",
  },
  {
    icon: "💭",
    title: "Just remembering",
    description:
      "You hear something brilliant, think 'I'll remember that.' You won't. And it's gone forever.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 px-4 bg-background-card">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
            You're already trying to save YouTube moments.
            <br />
            <span className="text-text-secondary">It's not working.</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            The average person forgets 90% of what they learn within a week.
            Here's why:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background-main border border-border rounded-lg p-6 md:p-8
                         hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg md:text-xl text-text-primary max-w-3xl mx-auto">
          <span className="text-accent font-semibold">Time:Stamps</span> solves
          this. Capture exact moments instantly, resurface them automatically,
          and actually retain what you learn.
        </p>
      </div>
    </section>
  );
}

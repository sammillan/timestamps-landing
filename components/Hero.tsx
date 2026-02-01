import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-6">
          Never Lose a YouTube
          <br />
          Moment Again
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Capture timestamps from any YouTube video in one click. Organize,
          search, and share your video library instantly.
        </p>

        <div className="max-w-xl mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

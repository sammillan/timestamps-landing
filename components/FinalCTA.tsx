import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Join the beta
        </h2>

        <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto mb-10">
          Get early access when we launch. No waitlist, instant setup.
        </p>

        <div className="max-w-xl mx-auto mb-6">
          <WaitlistForm />
        </div>

        <p className="text-text-secondary text-sm">
          Chrome extension installs in 60 seconds. Works on every YouTube video.
        </p>
      </div>
    </section>
  );
}

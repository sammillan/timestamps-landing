import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          Time:Stamps &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
          >
            Privacy
          </Link>
          <a
            href="mailto:hello@time-stamps.com"
            className="text-text-secondary text-sm hover:text-accent transition-colors duration-200"
          >
            hello@time-stamps.com
          </a>
        </div>
      </div>
    </footer>
  );
}

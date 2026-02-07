import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Time:Stamps",
  description:
    "Privacy Policy for the Time:Stamps Chrome Extension. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background-main text-text-primary">
      <div className="max-w-container mx-auto px-4 py-16 md:py-24">
        <Link
          href="/"
          className="inline-block text-text-secondary text-sm hover:text-accent transition-colors duration-200 mb-12"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-text-secondary mb-12">
          Effective date: February 7, 2026
        </p>

        <div className="space-y-10 text-text-secondary leading-relaxed max-w-3xl">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Who We Are
            </h2>
            <p>
              Time:Stamps (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) operates the Time:Stamps Chrome Extension and
              the website at{" "}
              <a
                href="https://time-stamps.com"
                className="text-accent hover:underline"
              >
                time-stamps.com
              </a>
              . This Privacy Policy explains what information we collect, how we
              use it, and your choices regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              What the Extension Does
            </h2>
            <p>
              Time:Stamps adds a Stamp button to YouTube. When you click it, the
              extension reads the current video&rsquo;s URL, title, thumbnail,
              and your current playback timestamp. This information is saved to
              your account so you can organize and revisit your favorite moments
              later.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-1">
              <li>
                <span className="text-text-primary font-medium">
                  Authentication session token
                </span>{" "}
                &mdash; stored locally in your browser to keep you signed in.
              </li>
              <li>
                <span className="text-text-primary font-medium">
                  Stamp data
                </span>{" "}
                &mdash; the video URL, title, thumbnail, timestamp, any notes
                you add, and collection selection. This is created only when you
                explicitly click the Stamp button.
              </li>
              <li>
                <span className="text-text-primary font-medium">
                  Minimal diagnostic logs
                </span>{" "}
                &mdash; non-sensitive technical logs used solely to maintain
                service reliability (e.g., error tracking). These do not contain
                personal information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              What We Do NOT Collect
            </h2>
            <p>We do not collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-1 mt-2">
              <li>Passwords or authentication credentials</li>
              <li>Payment or financial information</li>
              <li>Health data</li>
              <li>Precise geolocation</li>
              <li>
                Browsing history or activity beyond the active YouTube page when
                you use the Stamp feature
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              How We Use Your Information
            </h2>
            <p>Your information is used solely to:</p>
            <ul className="list-disc list-inside space-y-2 ml-1 mt-2">
              <li>Save and organize your stamps</li>
              <li>Sync your data across browser sessions</li>
              <li>Provide and improve the core functionality of the extension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Data Sharing
            </h2>
            <p>
              We do not sell your data. We do not share your data with third
              parties for advertising, analytics, or any purpose unrelated to
              providing the Time:Stamps service. Your stamp data is stored in
              our backend (hosted on Supabase) exclusively to deliver the
              service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Security
            </h2>
            <p>
              We take reasonable measures to protect your data. All
              communication between the extension and our servers is encrypted
              via HTTPS. Access to your data is controlled by your
              authentication session. While no method of transmission over the
              internet is 100% secure, we strive to protect your information
              using commercially reasonable means.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Data Retention
            </h2>
            <p>
              Your stamp data is retained until you choose to delete it. You may
              delete individual stamps at any time from within the extension. If
              you would like to request full deletion of your account and all
              associated data, please contact us at{" "}
              <a
                href="mailto:hello@time-stamps.com"
                className="text-accent hover:underline"
              >
                hello@time-stamps.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Your Controls
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-1">
              <li>
                <span className="text-text-primary font-medium">Sign out</span>{" "}
                at any time to revoke the extension&rsquo;s access to your
                account.
              </li>
              <li>
                <span className="text-text-primary font-medium">
                  Delete stamps
                </span>{" "}
                individually or in bulk from within the extension.
              </li>
              <li>
                <span className="text-text-primary font-medium">
                  Request account deletion
                </span>{" "}
                by emailing{" "}
                <a
                  href="mailto:hello@time-stamps.com"
                  className="text-accent hover:underline"
                >
                  hello@time-stamps.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section className="border border-border rounded-lg p-6 bg-background-card">
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Chrome Web Store Disclosure
            </h2>
            <p>
              The Time:Stamps extension accesses content on YouTube pages (video
              URL, title, thumbnail, and current playback timestamp){" "}
              <span className="text-text-primary font-medium">
                only when you explicitly click the Stamp button
              </span>
              . The extension does not run in the background, does not read or
              collect data from any other websites, and does not access your
              browsing history. All data collected is used solely to provide the
              stamping functionality described above.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
              Continued use of the extension after changes constitutes acceptance
              of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:hello@time-stamps.com"
                className="text-accent hover:underline"
              >
                hello@time-stamps.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

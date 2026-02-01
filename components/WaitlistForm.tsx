"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
  showName?: boolean;
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm({
  showName = true,
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: name || undefined,
          _subject: "New Time:Stamps Waitlist Signup",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`bg-background-card border border-accent/30 rounded-lg p-6 text-center ${className}`}
      >
        <div className="text-accent text-2xl mb-2">✓</div>
        <p className="text-text-primary font-medium">You're on the list!</p>
        <p className="text-text-secondary text-sm mt-1">
          Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 bg-background-card border border-border rounded-lg
                     text-text-primary placeholder-text-secondary
                     focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                     transition-all duration-200"
        />
        {showName && (
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="flex-1 px-4 py-3 bg-background-card border border-border rounded-lg
                       text-text-primary placeholder-text-secondary
                       focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                       transition-all duration-200"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-3 bg-accent text-background-card font-bold rounded-lg
                   hover:brightness-110 active:scale-[0.98]
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 min-h-[48px]"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          "Join Waitlist"
        )}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="text-text-secondary text-sm flex flex-wrap gap-x-4 gap-y-1">
        <span>✓ Free forever</span>
        <span>⚡ Chrome extension</span>
        <span>🔒 No spam</span>
      </p>
    </form>
  );
}

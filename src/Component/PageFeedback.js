import React from "react";

export function LoadingState({ label = "Loading details…" }) {
  return (
    <div className="feedback-state feedback-state--loading" role="status" aria-live="polite">
      <span className="feedback-spinner" aria-hidden="true" />
      <p>{label}</p>
    </div>
  );
}

export function EmptyState({ title = "Nothing to show yet", message = "Try changing your search or return later." }) {
  return (
    <div className="feedback-state feedback-state--empty" role="status">
      <span className="feedback-state__icon" aria-hidden="true">⌕</span>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export function ErrorState({ message = "We could not load this information. Please try again." }) {
  return (
    <div className="feedback-state feedback-state--error" role="alert">
      <span className="feedback-state__icon" aria-hidden="true">!</span>
      <p>{message}</p>
    </div>
  );
}

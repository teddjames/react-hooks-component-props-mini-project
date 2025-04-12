import React from "react";

// Helper function for the bonus read indicator
function getReadIndicator(minutes) {
  if (minutes < 30) {
    // For every 5 minutes (rounded up), display a coffee cup.
    const cups = Math.ceil(minutes / 5);
    return "☕️".repeat(cups) + ` ${minutes} min read`;
  } else {
    // For 30 minutes or more, for every 10 minutes (rounded up) display a bento box.
    const bento = Math.ceil(minutes / 10);
    return "🍱".repeat(bento) + ` ${minutes} min read`;
  }
}

function Article({ title, date, preview, minutesToRead }) {
  // Use default date if not provided.
  const displayDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      {/* Bonus: Render read indicator if minutesToRead is provided */}
      {minutesToRead != null && <span>{getReadIndicator(minutesToRead)}</span>}
    </article>
  );
}

export default Article;

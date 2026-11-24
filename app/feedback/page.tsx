import { getFeedback } from "@/lib/feedback";
import { saveFeedback } from "./actions";

export const metadata = { title: "Feedback" };

export default async function FeedbackPage() {
  const items = await getFeedback();

  return (
    <section aria-labelledby="feedback-heading">
      <h1 id="feedback-heading">Send Feedback</h1>
      <p>Share a comment or suggestion about the Web Engineering Lab.</p>
      <form action={saveFeedback}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required maxLength={80} />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required maxLength={1000} />
        </p>
        <button type="submit">Send</button>
      </form>

      <h2>Messages ({items.length})</h2>
      {items.length === 0 ? (
        <p className="muted">No feedback has been submitted yet.</p>
      ) : (
        <ul className="feedback-list">
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}:</strong> {item.message}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
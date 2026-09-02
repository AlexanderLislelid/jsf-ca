export default function ContactPage() {
  return (
    <div>
      <form className="flex flex-col p-4">
        <label htmlFor="fullname">Full name</label>
        <input type="text" name="fullname" id="fullname" />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows={5}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

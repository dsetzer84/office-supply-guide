export const metadata = {
  title: "About — The Supply Room",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Personnel File</span>
      <h1 className="font-mono text-4xl font-bold mt-3">About</h1>
      <p className="mt-6 text-ink/85 leading-relaxed">
        [Write 2–3 short paragraphs here about who runs this site and why
        readers should trust the picks. Specifics build trust — mention how
        long you've worked from a desk, what kind of workspace problems you
        actually deal with, and how you test or research products before
        recommending them.]
      </p>
    </div>
  );
}

export const metadata = {
  title: "Affiliate Disclosure — The Supply Room",
};

export default function Disclosure() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <span className="form-label max-w-xs">Form 002</span>
      <h1 className="font-mono text-4xl font-bold mt-3">
        Affiliate Disclosure
      </h1>
      <div className="mt-6 space-y-4 text-ink/85 leading-relaxed">
        <p>
          The Supply Room is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to
          provide a means for sites to earn advertising fees by advertising
          and linking to Amazon.com.
        </p>
        <p>
          When you click a product link on this site and make a qualifying
          purchase, we may earn a small commission at no additional cost to
          you. This does not affect the price you pay.
        </p>
        <p>
          We only recommend products we have researched or tested
          ourselves. Our opinions are our own, and commission potential does
          not determine which products we cover or how we rate them.
        </p>
      </div>
    </div>
  );
}

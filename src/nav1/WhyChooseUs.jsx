export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <img
          src="/images/insurance-team.jpg"
          alt="Why Choose Us"
          className="rounded-2xl shadow-lg w-full"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our Insurance?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Fast & Easy Claim Process</li>
            <li>✔ 24/7 Customer Support</li>
            <li>✔ Affordable Premium Plans</li>
            <li>✔ Trusted by Thousands of Clients</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
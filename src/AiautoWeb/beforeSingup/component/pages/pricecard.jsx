function PricingCard({
  title,
  price,
  duration,
  features,
  popular,
  isContact,
}) {
  const handleClick = () => {
    if (isContact) {
      window.open(
        "https://wa.me/916393014836?text=Hi%20I%20want%20Enterprise%20plan",
        "_blank"
      );
    } else {
      alert(`${title} plan selected`);
    }
  };

  return (
    <div className="relative  overflow-hidden w-80 bg-[#242529] border border-green-500/40 rounded-2xl p-6 transition hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]">
      {popular && (
        <span className="absolute top-7 -right-10 rotate-45 bg-red-500 text-black text-xs px-10 py-1 font-semibold">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl text-center mb-4">{title}</h3>

      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-green-400">{price}</span>
        {duration && <span className="text-gray-400">{duration}</span>}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <span className="text-green-400">✔</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className="w-full  cursor-pointer hover:scale-102 active:scale-98 active:bg-[#c1c1c1]  bg-green-500 text-black py-2 rounded-lg font-semibold hover:bg-green-400"
      >
        {isContact ? "Contact Sales" : "Get Started"}
      </button>
    </div>
  );
}
export default PricingCard;
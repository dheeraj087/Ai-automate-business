import { useState } from "react";
import PricingCard from "./pricecard";

export default function PricingPage() {
  const [billing, setBilling] = useState("yearly");

  return (
    <div className=" m-auto bg-[#1f2023] text-white">

      <div className="flex flex-col items-center py-16 px-4">
        <h2 className="text-4xl font-semibold mb-6">Pricing Plans</h2>

        {/* Toggle */}
        <div className="flex items-center gap-4 mb-12">
          <span className={billing === "monthly" ? "text-green-400" : ""}>
            Monthly
          </span>
          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
            className="w-14 h-7 bg-green-500 rounded-full relative"
          >
            <span
              className={`absolute top-1 w-5 h-5 bg-black rounded-full transition ${
                billing === "monthly" ? "left-1" : "left-8"
              }`}
            />
          </button>
          <span className={billing === "yearly" ? "text-green-400" : ""}>
            Yearly
          </span>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          <PricingCard
            title="Starter"
            price={billing === "monthly" ? "$49" : "$499"}
            duration={billing === "monthly" ? "/mo" : "/yr"}
            features={[
              "Basic AI Automation",
              "5 Workflows",
              "Email Support",
              "Community Access",
            ]}
          />

          <PricingCard
            title="Pro"
            popular
            price={billing === "monthly" ? "$99" : "$999"}
            duration={billing === "monthly" ? "/mo" : "/yr"}
            features={[
              "Advanced AI Automation",
              "Unlimited Workflows",
              "Priority Email & Chat Support",
              "Dedicated Account Manager",
              "API Access",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Full-Suite AI Automation",
              "Custom Workflows",
              "24/7 Phone & Chat Support",
              "Dedicated Team",
              "On-Premise Deployment",
              "SLA",
            ]}
            isContact
          />
        </div>
      </div>

    </div>
  );
}

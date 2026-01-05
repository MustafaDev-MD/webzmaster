"use client";

import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";

const servicesConfig = [
  {
    name: "Website",
  },
  {
    name: "E-commerce",
  },
  {
    name: "Logo Design",
  },
  {
    name: "SEO",
  },
  {
    name: "Branding",
  },
  {
    name: "SMM",
  },
];

const pricingByService = {
  Website: [
    {
      name: "Basic Plan",
      price: "$249",
      features: [
        "Up to 3 Pages Website",
        "Modern responsive layout",
        "Contact / Query Form",
        "2 Stock Images",
        "Basic speed optimization",
        "Cross‑browser compatibility",
      ],
    },
    {
      name: "Professional",
      price: "$499",
      features: [
        "Up to 7 Pages Website",
        "Custom homepage design",
        "Conversion‑focused layout",
        "Contact / Query Form",
        "Blog / News section setup",
        "5 Stock Images",
        "On‑page SEO setup (basic)",
        "Google Analytics integration",
        "Mobile & tablet responsive",
      ],
    },
    {
      name: "Elite",
      price: "$899",
      features: [
        "Up to 12 Pages Website",
        "Custom UI with revisions",
        "Advanced animations & sections",
        "Multiple lead capture forms",
        "Landing page for campaigns",
        "Blog / Resources setup",
        "Advanced On‑page SEO setup",
        "Performance & speed optimization",
        "Priority support for launch",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited pages & templates",
        "Dedicated UX workshop",
        "Custom integrations (CRM, tools, etc.)",
        "Multi‑language support (optional)",
        "Ongoing optimization and support",
      ],
    },
  ],
  "E-commerce": [
    {
      name: "Basic Plan",
      price: "$349",
      features: [
        "3 Page E‑commerce Website",
        "2 Stock Images",
        "1 jQuery Slider Banner",
        "Contact / Query Form",
        "48 to 72 hours TAT",
        "Complete Development",
        "Conceptual and Dynamic Website",
        "Mobile Responsive",
      ],
    },
    {
      name: "Professional",
      price: "$689",
      features: [
        "Up to 7 Pages E‑commerce Website",
        "5 Stock Images",
        "2 Slider Banners",
        "Contact / Query Form",
        "Priority 48 hours TAT",
        "Complete Development",
        "100% Satisfaction Guarantee",
        "100% Unique Design Guarantee",
        "Conceptual and Dynamic Website",
        "Mobile Responsive",
        "Basic On-page SEO",
        "Social Media Integration",
      ],
    },
    {
      name: "Elite",
      price: "$1199",
      features: [
        "Unlimited Pages E‑commerce Website",
        "Premium Stock Images",
        "Multiple Interactive Banners",
        "Advanced Contact & Custom Forms",
        "24–48 hours Priority TAT",
        "Complete Development + Strategy Call",
        "100% Satisfaction & Unique Design Guarantee",
        "Conceptual and Dynamic Website",
        "Mobile Responsive on All Devices",
        "Online Reservation / Appointment Tool (Optional)",
        "Online Payment Integration (Optional)",
        "Lead Capturing Forms (Optional)",
        "Newsletter Subscription (Optional)",
        "Newsfeed Integration",
        "CMS / Admin Panel Support",
        "Advanced Social Media Integration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Custom Strategy & Discovery Session",
        "Bespoke E‑commerce UI/UX Design",
        "Complex Web Application or Marketplace",
        "Dedicated Project Manager",
        "Integrations with your tools (CRM, ERP, etc.)",
        "Conversion & Performance Optimization",
        "Ongoing Maintenance & Support Plans",
        "Full Branding & Marketing Add‑ons (Optional)",
      ],
    },
  ],
  "Logo Design": [
    {
      name: "Basic Plan",
      price: "$99",
      features: [
        "2 Logo concepts",
        "2 Rounds of revisions",
        "JPEG & PNG files",
        "Basic brand color palette",
      ],
    },
    {
      name: "Professional",
      price: "$199",
      features: [
        "4 Logo concepts",
        "Unlimited revisions (within scope)",
        "Vector files (AI, EPS, SVG)",
        "Full brand color palette",
        "Black & white versions",
      ],
    },
    {
      name: "Elite",
      price: "$349",
      features: [
        "6+ Custom logo concepts",
        "Brand discovery session",
        "Complete logo pack (all formats)",
        "Mini brand style guide (fonts & colors)",
        "Social media profile images",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Full visual identity system",
        "Brand guidelines document",
        "Logo lockups & usage rules",
        "Icon set & illustrations (optional)",
      ],
    },
  ],
  SEO: [
    {
      name: "Basic Plan",
      price: "$199 / mo",
      features: [
        "Keyword research for core pages",
        "On‑page optimization (up to 5 pages)",
        "Meta titles & descriptions",
        "Google Search Console setup",
      ],
    },
    {
      name: "Professional",
      price: "$399 / mo",
      features: [
        "On‑page SEO (up to 12 pages)",
        "Technical SEO audit",
        "Blog SEO recommendations",
        "Monthly performance report",
        "Internal linking optimization",
      ],
    },
    {
      name: "Elite",
      price: "$699 / mo",
      features: [
        "Advanced keyword strategy",
        "Content plan & briefs",
        "Link building outreach",
        "Technical fixes implementation",
        "Competitor analysis & tracking",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "International / multi‑language SEO",
        "Dedicated SEO strategist",
        "Custom analytics dashboard",
        "Quarterly strategy workshops",
      ],
    },
  ],
  Branding: [
    {
      name: "Basic Plan",
      price: "$299",
      features: [
        "Brand discovery questionnaire",
        "Logo refinement or refresh",
        "Basic color palette & typography",
      ],
    },
    {
      name: "Professional",
      price: "$599",
      features: [
        "Brand positioning workshop",
        "Logo + color + typography system",
        "Business card & letterhead design",
        "Simple brand guidelines PDF",
      ],
    },
    {
      name: "Elite",
      price: "$999",
      features: [
        "Full brand strategy session",
        "Messaging pillars & tone of voice",
        "Extended visual system (patterns, imagery)",
        "Multi‑page brand guidelines",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Brand architecture (sub‑brands)",
        "Launch & rollout strategy",
        "Internal brand training assets",
      ],
    },
  ],
  SMM: [
    {
      name: "Basic Plan",
      price: "$199 / mo",
      features: [
        "1 Social platform management",
        "8–10 Posts per month",
        "Caption writing & hashtag research",
        "Monthly performance summary",
      ],
    },
    {
      name: "Professional",
      price: "$399 / mo",
      features: [
        "2 Social platforms management",
        "16–20 Posts per month",
        "Custom graphics & carousels",
        "Community management (basic replies)",
        "Monthly strategy review",
      ],
    },
    {
      name: "Elite",
      price: "$699 / mo",
      features: [
        "3+ Social platforms management",
        "Paid ads campaign setup",
        "Content calendar & strategy",
        "Advanced reporting & insights",
        "A/B testing on creatives",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated social media team",
        "Always‑on campaign strategy",
        "Influencer & collaboration planning",
        "Full‑funnel reporting",
      ],
    },
  ],
};

const Pricing = () => {
  const [activeService, setActiveService] = useState("E-commerce");

  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <SectionTitle
                SubTitle="Quality services at affordable rates"
                Title="Choose Your Best Plan"
              ></SectionTitle>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-descr">
                Flexible packages tailored for websites, e‑commerce stores,
                branding and digital marketing so you only pay for what you
                need.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className="pricing-tabs">
              {servicesConfig.map((service) => (
                <li key={service.name}>
                  <button
                    type="button"
                    className={`pricing-tab-btn ${
                      activeService === service.name ? "active" : ""
                    }`}
                    onClick={() => setActiveService(service.name)}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          {(pricingByService[activeService] ?? pricingByService["Website"]).map((plan) => (
            <div
              className="col-xl-3 col-lg-3 col-md-6"
              key={`${activeService}-${plan.name}`}
            >
              <PricingCard
                Price={plan.price}
                PricePlan={plan.name}
                Service={activeService}
                BtnUrl="/pricing"
                BtnText="Choose Plan"
                FeatureList={plan.features}
              ></PricingCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
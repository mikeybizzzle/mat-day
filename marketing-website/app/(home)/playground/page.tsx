"use client";

import React from "react";
import { motion } from "motion/react";

// Sample components for the playground
const PrimaryButton = () => (
  <button className="klick-gen-button klick-gen-button-primary">
    Primary Button
  </button>
);

const SecondaryButton = () => (
  <button className="klick-gen-button klick-gen-button-secondary">
    Secondary Button
  </button>
);

const OutlineButton = () => (
  <button className="klick-gen-button klick-gen-button-outline">
    Outline Button
  </button>
);

const SampleCard = () => (
  <div className="klick-gen-card">
    <div className="klick-gen-card-header">
      <h3 className="klick-gen-card-title">Card Title</h3>
    </div>
    <div className="klick-gen-card-body">
      <p>This is a sample card component with some content inside.</p>
    </div>
  </div>
);

const CardWithFooter = () => (
  <div className="klick-gen-card">
    <div className="klick-gen-card-header">
      <h3 className="klick-gen-card-title">Complete Card</h3>
    </div>
    <div className="klick-gen-card-body">
      <p>Card with header, body, and footer sections.</p>
    </div>
    <div className="klick-gen-card-footer">
      <button className="klick-gen-button klick-gen-button-primary">Action</button>
    </div>
  </div>
);

const SampleInput = () => (
  <input
    type="text"
    placeholder="Enter text..."
    className="klick-gen-input"
  />
);

const ErrorInput = () => (
  <input
    type="text"
    placeholder="Error state..."
    className="klick-gen-input klick-gen-input-error"
  />
);

// Component registry
const components = [
  {
    id: "button-primary",
    name: "Primary Button",
    category: "Buttons",
    component: PrimaryButton,
    description: "A primary action button with hover effects",
  },
  {
    id: "button-secondary",
    name: "Secondary Button",
    category: "Buttons",
    component: SecondaryButton,
    description: "A secondary action button in purple",
  },
  {
    id: "button-outline",
    name: "Outline Button",
    category: "Buttons",
    component: OutlineButton,
    description: "An outlined button variant",
  },
  {
    id: "card",
    name: "Basic Card",
    category: "Layout",
    component: SampleCard,
    description: "A versatile card component for content display",
  },
  {
    id: "card-footer",
    name: "Card with Footer",
    category: "Layout",
    component: CardWithFooter,
    description: "Card with header, body, and footer sections",
  },
  {
    id: "input",
    name: "Text Input",
    category: "Forms",
    component: SampleInput,
    description: "A styled text input field",
  },
  {
    id: "input-error",
    name: "Error Input",
    category: "Forms",
    component: ErrorInput,
    description: "Text input with error state styling",
  },
];

const PlaygroundPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const categories = ["All", ...new Set(components.map(c => c.category))];

  const filteredComponents = selectedCategory === "All"
    ? components
    : components.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Component Playground
        </h1>
        <p className="text-lg text-gray-600">
          Explore and visualize all Klick-Gen components in your workspace
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === category
                ? "bg-brand text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Component Info */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-xs px-2 py-1 bg-emerald-100 text-brand rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>

            {/* Component Preview */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-[120px] flex items-center justify-center border border-gray-100">
              <item.component />
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                View Code
              </button>
              <button className="flex-1 px-3 py-1.5 text-sm bg-brand text-white hover:bg-emerald-600 rounded-md transition-colors">
                Copy
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-gray-500 text-lg">
            No components found in this category
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PlaygroundPage;

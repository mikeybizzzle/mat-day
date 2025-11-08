"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import IconBoxHero from "./cards/iconBoxHero";
import Analytics from "./cards/Analytics";
import SocialMediaCard from "./cards/SocialMediaCard";
import PaperPinCard from "./cards/paperPin";
import Link from "next/link";
import { transition, variants } from "@/lib/data";
import { ArrowRight } from "lucide-react";

const text = "Record interviews. Centralise feedback automatically.";

export const Hero = () => {
  const words = text.split(" ");
  return (
    <section className="klick-gen-hero mt-5 rounded-[20px]">
      <motion.div className="w-full flex flex-col items-center justify-center">
        <Banner />
        <h1 className="klick-gen-hero-title md:w-4/6 w-full mt-8">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
        <motion.p
          transition={transition}
          variants={variants}
          className="klick-gen-hero-subtitle"
        >
          Record and organize user interviews automatically. Focus on what
          matters - connecting with users.
        </motion.p>
        <Link href="/sign-up">
          <motion.button
            transition={transition}
            variants={variants}
            className="klick-gen-button klick-gen-button-primary"
          >
            Get Your Custom Tailored Plan
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>

        {/* Stats Section - Class A Media Style */}
        <div className="klick-gen-stats-grid max-w-6xl mx-auto mt-16">
          <div className="klick-gen-stat">
            <span className="klick-gen-stat-value" style={{color: 'var(--klick-gen-color-white)'}}>$150M</span>
            <div className="klick-gen-stat-label" style={{color: 'var(--klick-gen-color-white)'}}>in Flow Revenue</div>
            <p className="klick-gen-stat-description" style={{color: 'var(--klick-gen-color-neutral-300)'}}>
              Our email and SMS flows have generated over $150 million in attributable revenue.
            </p>
          </div>
          <div className="klick-gen-stat">
            <span className="klick-gen-stat-value" style={{color: 'var(--klick-gen-color-white)'}}>200+</span>
            <div className="klick-gen-stat-label" style={{color: 'var(--klick-gen-color-white)'}}>Brands Trust Us</div>
            <p className="klick-gen-stat-description" style={{color: 'var(--klick-gen-color-neutral-300)'}}>
              We've built retention systems for leading eCommerce brands.
            </p>
          </div>
          <div className="klick-gen-stat">
            <span className="klick-gen-stat-value" style={{color: 'var(--klick-gen-color-white)'}}>4.8/5</span>
            <div className="klick-gen-stat-label" style={{color: 'var(--klick-gen-color-white)'}}>Trusted Partner</div>
            <p className="klick-gen-stat-description" style={{color: 'var(--klick-gen-color-neutral-300)'}}>
              Named one of Klaviyo's fastest-growing agencies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Banner = () => {
  return (
    <Link href="/blog/Artificial-Intelligence">
      <motion.div
        className="klick-gen-hero-badge"
        transition={transition}
        variants={variants}
      >
        <p className="md:text-base text-sm font-semibold">
          Trusted by Over 200 Brands
        </p>
      </motion.div>
    </Link>
  );
};

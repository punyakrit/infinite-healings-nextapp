import React from "react";
import Card from "./Card";
import { cardsData } from "@/data";
import Link from "next/link";

function Services() {
  return (
    <div className="relative py-8 px-6  ">
      <div className="text-sky-900 text-2xl md:text-4xl font-bold text-center my-4">
        Services I Offer
      </div>
      <div className="text-center  text-gray-700 mb-12">
        Explore our range of services designed to empower and uplift you on your
        journey of self-discovery and healing. From Reiki energy healing to
        intuitive Tarot readings and insightful Numerology consultations, we're
        here to support you every step of the way.
      </div>
      <div className="flex justify-center">
        <div className="md:flex flex-wrap gap-8 px-4">
          {cardsData.slice(0, 2).map((data) => (
            <Card
              key={data.id}
              title={data.title}
              imageUrl={data.imageUrl}
              alt={data.alt}
              description={data.description}
            />
          ))}
          <Link href="/services">
            <span className="rounded-3xl w-[300px] my-8 h-[420px] overflow-hidden cursor-pointer bg-gray-900 block">
              <div className="text-white p-4 flex justify-center items-center h-full">
                <h2 className="text-2xl shadow-lg shadow-white font-bold mb-2 border-2 px-7 py-4 rounded-3xl">
                  View all services
                </h2>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;

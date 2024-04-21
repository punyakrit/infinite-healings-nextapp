import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Accordian() {
  // Define accordion data
  const accordionData = [
    {
      id: 1,
      question:
        "What is the process of tarot card reading at infinitehealings?",
      answer:
        "The tarot card reading process at infinitehealings involves the reader shuffling a deck of tarot cards and drawing a certain number of cards. Each card has symbolic meanings that the reader interprets to provide insights into the past, present, and future of the individual seeking guidance. The interpretation can cover various aspects of life, including relationships, career, and personal development.",
    },
    {
      id: 2,
      question: "How can I learn Lama Fera healing at infinitehealings?",
      answer:
        "To learn Lama Fera healing at infinitehealings, you can enroll in workshops or courses conducted by experienced Lama Fera Grandmasters. These courses typically cover the principles of Lama Fera, the use of symbols and mantras, and hands-on healing techniques. It's recommended to find a reputable instructor or institution that offers authentic Lama Fera training.",
    },
    {
      id: 3,
      question:
        "Is there an age restriction for Mirror Magic Healing at infinitehealings?",
      answer:
        "Mirror Magic Healing at infinitehealings is suitable for all ages, and there is generally no specific age restriction. However, it's advisable to consult with the practitioner or facilitator to ensure that the healing modality is appropriate for individuals of different age groups. Mirror Magic Healing focuses on harnessing the reflective energies of mirrors to promote healing and well-being.",
    },
    {
      id: 4,
      question:
        "What benefits does Angel Healer and Facilitator provide at infinitehealings?",
      answer:
        "Angel Healer and Facilitator services at infinitehealings offer benefits such as connecting with divine energies, receiving guidance from angels, and experiencing spiritual healing. The facilitator acts as a conduit between individuals and angelic realms, providing a channel for communication and healing. Clients may experience emotional upliftment, stress relief, and a sense of peace through these sessions.",
    },
    {
      id: 5,
      question:
        "Are online sessions available for all services at infinitehealings?",
      answer:
        "Yes, online sessions are available for all services mentioned at infinitehealings. Many practitioners offer virtual sessions, allowing individuals to access healing and guidance from the comfort of their homes. Online sessions may include video calls, phone consultations, or distance healing practices, depending on the nature of the service. It's recommended to communicate with the respective practitioners to discuss the details and logistics of online sessions.",
    },
    {
      id: 6,
      question:
        "What are the different types of Quantum Healings offered at infinitehealings?",
      answer:
        "At infinitehealings, various types of Quantum Healings are available, including quantum energy healing, quantum hypnosis healing, and quantum light healing. These modalities harness the power of quantum mechanics and energy work to facilitate deep healing and transformation at the cellular and energetic levels.",
    },
    {
      id: 7,
      question:
        "How does Money Reiki work, and what are its benefits at infinitehealings?",
      answer:
        "Money Reiki at infinitehealings focuses on clearing energetic blockages related to abundance and prosperity. Practitioners use specific symbols and energy techniques to align individuals with the vibration of abundance, allowing them to attract wealth and financial well-being into their lives. Benefits may include increased prosperity consciousness, enhanced financial opportunities, and improved money management skills.",
    },
    {
      id: 8,
      question: "Can Candle Healing be performed remotely at infinitehealings?",
      answer:
        "Yes, Candle Healing sessions can be performed remotely at infinitehealings. Practitioners harness the energy of candles to create a healing space and facilitate energetic clearing and balancing for clients. Remote sessions may involve visualization techniques, guided meditations, and intention setting to enhance the healing process and promote overall well-being.",
    },
    {
      id: 9,
      question:
        "What is the Merlin Trinity Healing System, and how does it work at infinitehealings?",
      answer:
        "The Merlin Trinity Healing System at infinitehealings is a holistic approach to healing that combines energy work, intuitive guidance, and ancient wisdom teachings. Practitioners integrate techniques from various healing modalities to address physical, emotional, and spiritual imbalances in individuals. The system emphasizes empowerment, self-discovery, and spiritual growth, guiding clients towards greater harmony and wholeness.",
    },
    {
      id: 10,
      question:
        "Is Kundalini Reiki suitable for beginners at infinitehealings?",
      answer:
        "Yes, Kundalini Reiki at infinitehealings is suitable for beginners and experienced practitioners alike. The practice focuses on awakening and harnessing the Kundalini energy, which is believed to reside at the base of the spine. Through gentle energy techniques and attunements, practitioners can activate the Kundalini energy, promoting physical, emotional, and spiritual healing and transformation.",
    },
  ];

  return (
    <div className="xl:px-60 lg:px-40 md:px-16 my-12 px-4 w-full">
      <div className="flex justify-center text-3xl font-bold py-6">
        Frequently Asked Question
      </div>
      <Accordion type="single" collapsible>
        {accordionData.map((item) => (
          <AccordionItem className="text-xs md:text-lg" key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordian;

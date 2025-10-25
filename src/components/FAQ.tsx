import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.",
  },
  {
    question: "How far is the hotel from major attractions?",
    answer: "Our hotel is centrally located in Kasauli. Most major attractions like Christ Church, Monkey Point, and Mall Road are within 1-4 km and easily accessible.",
  },
  {
    question: "Do you provide airport/railway station pickup?",
    answer: "Yes, we provide complimentary pickup from Kalka Railway Station (40 km) and Chandigarh Airport (65 km) for bookings of 3 nights or more. Additional charges apply for shorter stays.",
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, we offer free secure parking for all our guests. The parking area is monitored 24/7 for your peace of mind.",
  },
  {
    question: "Are pets allowed?",
    answer: "Yes, we are a pet-friendly hotel! We welcome your furry friends with prior notification. A nominal pet fee of ₹500 per night applies.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 48 hours before check-in. Cancellations made within 48 hours will be charged one night's stay. No-shows will be charged the full booking amount.",
  },
  {
    question: "Do you serve food?",
    answer: "Yes, we have an in-house restaurant serving breakfast, lunch, and dinner. We offer multi-cuisine options including local Himachali specialties, North Indian, and Continental dishes.",
  },
  {
    question: "What is the best time to visit Kasauli?",
    answer: "The best time to visit Kasauli is from March to June and September to November. The weather is pleasant during these months, perfect for sightseeing and outdoor activities.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about your stay
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border border-border"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

import React from "react";
import { motion } from "framer-motion";
import reviewClient1 from "../assets/reviewClient1.jpeg"
import reviewClient2 from "../assets/reviewClient2.jpeg"
import reviewClient3 from "../assets/reviewclient3.jpeg"

const testimonials = [
  {
    id: 1,
    name: "Diesel Gaming",
    role: "Organization",
    feedback: "RedWhisk handles everything, so I can focus on gaming and creating. Highly recommend!",
    image: reviewClient1
  },
  {
    id: 2,
    name: "Phyjeeics",
    role: "Aditya Narayan",
    feedback: "RedWhisk handles my content and collaborations, giving me more time to focus on teaching. Highly recommend!",
    image:  reviewClient2
  },
  {
    id: 3,
    name: "Encore",
    role: "Rishbah",
    feedback: "RedWhisk streamlined my workflow, handling content and brand deals so I can focus on gaming. A total game-changer!",
    image:  reviewClient3
  },
  {
    id: 1,
    name: "Diesel Gaming",
    role: "Organization",
    feedback: "RedWhisk handles everything, so I can focus on gaming and creating. Highly recommend!",
    image: reviewClient1
  },
  {
    id: 2,
    name: "Phyjeeics",
    role: "Aditya Narayan",
    feedback: "RedWhisk handles my content and collaborations, giving me more time to focus on teaching. Highly recommend!",
    image:  reviewClient2
  },
  {
    id: 3,
    name: "Encore",
    role: "Rishbah",
    feedback: "RedWhisk streamlined my workflow, handling content and brand deals so I can focus on gaming. A total game-changer!",
    image:  reviewClient3
  },
  
];

const CustomerTestimonials = () => {
  return (
    <div className="overflow-hidden w-full  py-10">
      <motion.div
        className="flex space-x-6"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white/10 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 italic">“{testimonial.feedback}”</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.role}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CustomerTestimonials;

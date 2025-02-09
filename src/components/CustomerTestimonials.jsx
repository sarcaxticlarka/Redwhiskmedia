import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alaska Valenta",
    role: "Designer",
    feedback: "The best for exporting and getting the right results without a hassle.",
    image: "https://images.pexels.com/photos/6931208/pexels-photo-6931208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Emily Peterson",
    role: "CEO",
    feedback: "It’s a super product with professional support team. I can’t wait to see the future features.",
    image: "https://images.pexels.com/photos/5649093/pexels-photo-5649093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Adrien Jacob",
    role: "Head of Sales",
    feedback: "We’ve been looking for this product since the creation of our business.",
    image: "https://images.pexels.com/photos/8837809/pexels-photo-8837809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Marketing Manager",
    feedback: "This tool has been an absolute game changer for our campaigns!",
    image: "https://images.pexels.com/photos/6592751/pexels-photo-6592751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Developer",
    feedback: "Amazing product with excellent customer support!",
    image: "https://images.pexels.com/photos/8512381/pexels-photo-8512381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Olivia Green",
    role: "Project Manager",
    feedback: "Efficient, reliable, and easy to use! Highly recommended.",
    image: "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

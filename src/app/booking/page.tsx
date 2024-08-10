import Hero from "@/components/Booking/Hero";
import React, { Suspense } from "react";

const BookingPage = () => {
  return (
    <section className="flex flex-col gap-20 min-h-screen py-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </section>
  );
};

export default BookingPage;

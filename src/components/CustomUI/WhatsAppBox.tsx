"use client";

import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };
  // const whatsappNumber = "+254796509425";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <>
      <div
        className="fixed bottom-10 md:right-4 -right-0 z-50 cursor-pointer bg-[#0A0908] text-white p-4 rounded-full shadow-lg"
        onClick={toggleChatBox}
      >
        <MessageCircleMore />
      </div>
      {isOpen && (
        <div className="fixed bottom-20 right-10 z-50 w-80 bg-[#F7F7FF] p-4 shadow-lg rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">WhatsApp Chat</h3>
            <button onClick={toggleChatBox} className="cursor-pointer">
              &times;
            </button>
          </div>
          <p className="mt-2">Chat with us on WhatsApp!</p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#0A0908] text-white p-2 rounded-md"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Open WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;

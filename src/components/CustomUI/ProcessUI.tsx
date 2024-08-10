import { Box } from "lucide-react";
import React from "react";

interface ProcessItem {
  id: string;
  processTitle: string;
  processContent: string;
}

interface ProcessUIProps {
  process: ProcessItem[];
}

const ProcessUI = ({ process }: ProcessUIProps) => {
  return (
    <section className="flex flex-col">
      {process.map((item) => (
        <div className="flex gap-3" key={item.id}>
          <div className="flex flex-col items-center">
            <Box />
            <hr className="w-0.5 h-48 bg-gray-300 my-4" />
          </div>
          <div>
            <h1 className="pb-5 font-bold text-xl">{item.processTitle}</h1>
            <p className="text-gray-700">{item.processContent}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProcessUI;

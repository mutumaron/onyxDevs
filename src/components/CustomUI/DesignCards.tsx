import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DesignCardProps {
  design: {
    id: string;
    cardTitle: string;
    cardContent: string;
  };
}

const DesignCards = ({ design }: DesignCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{design.cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{design.cardContent}</p>
      </CardContent>
    </Card>
  );
};

export default DesignCards;

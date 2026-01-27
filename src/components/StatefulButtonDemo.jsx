"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });
  };
  return (
    <div className="flex h-40 w-12 items-center justify-center">
      <Button onClick={handleClick}>Enviar</Button>
    </div>
  );
}

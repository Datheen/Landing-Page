"use client";

import React from "react";
import { Button } from "@/components/ui/stateful-button";

export function StatefulButtonDemo({ onSubmit, disabled }) {
  const handleClick = async () => {
    if (onSubmit) {
      await onSubmit();
    }
  };

  return (
   <div className="bg-primary rounded-full"> <Button onClick={handleClick} disabled={disabled}>
      Enviar
    </Button></div>
  );
}

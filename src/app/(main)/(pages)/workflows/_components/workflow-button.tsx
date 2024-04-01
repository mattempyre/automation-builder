"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const handleClick = () => {};

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};
export default WorkflowButton;

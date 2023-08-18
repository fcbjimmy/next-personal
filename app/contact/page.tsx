import React from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/sendEmail";

type Props = {};

export async function generateMetadata() {
  return {
    title: "Contact form",
  };
}

export default function Contact() {
  return <div>page</div>;
}

"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/sendEmail";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required("Please leave a message"),
  })
  .required();

export function ContactForm() {
  const [loading, setLoading] = useState<true | false>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: ContactData) {
    setLoading((prevState) => !prevState);
    const res: string = await sendEmail(data, reset);
    console.log(res);
    if (res === "Message Sent") setLoading((prevState) => !prevState);
  }

  return (
    <>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 text-gray-900 dark:text-gray-100"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            className="
          pl-4 pr-8 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-black dark:text-white dark:selection:bg-teal-400 selection:bg-teal-400"
          />
          <p className="text-red-500 dark:text-red-300 text-sm">
            {errors.name?.message}
          </p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            type="text"
            className="
          pl-4 pr-8 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-black dark:text-white dark:selection:bg-teal-400 selection:bg-teal-400"
          />
          <p className="text-red-500 dark:text-red-300 text-sm">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className="
          pl-4 pr-8 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-black dark:text-white dark:selection:bg-teal-400 selection:bg-teal-400"
          />
          <p className="text-red-500 dark:text-red-300 text-sm">
            {errors.message?.message}
          </p>
        </div>
        <button
          type="submit"
          className="font-medium h-9 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-20 transform active:scale-y-75 transition-transform"
        >
          {loading ? "Sending" : "Send"}
        </button>
      </form>
    </>
  );
}

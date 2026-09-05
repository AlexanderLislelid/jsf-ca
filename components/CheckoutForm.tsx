"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutFormSchema,
  type CheckoutFormValues,
} from "@/lib/validation/checkoutForm";

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 p-4"
      noValidate
    >
      <div className="mb-2">
        <label htmlFor="fullame">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.firstName && (
          <p id="firstName-error" role="alert" className="text-sm text-red-600">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.lastName && (
          <p id="lastName-error" role="alert" className="text-sm text-red-600">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="w-full px-4 py-2 rounded-md border"
        />
        {errors.address && (
          <p id="address-error" role="alert" className="text-sm text-red-600">
            {errors.address.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 px-4 py-2 rounded-md bg-black text-white"
      >
        Checkout
      </button>
    </form>
  );
}

import { Metadata } from "next";
import RegistrationForm from "@/components/registration-form";
import "react-phone-number-input/style.css";

export const metadata: Metadata = {
  title: "Register Your Restaurant | Servio",
  description:
    "Join Servio's restaurant management platform and streamline your operations today.",
};

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Register Your Restaurant
      </h1>
      <RegistrationForm />
    </div>
  );
}
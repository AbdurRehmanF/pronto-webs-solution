"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CustomToast } from "@/components/custom-toast";
import { contactFormSchema } from "@/validations/contact-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const ContactFormSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      termsOfService: false,
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", values);

      CustomToast({
        width: "auth",
        type: "default",
        icon: "mail-check",
        title: "Quote Request Submitted!",
        description:
          "Thank you for your interest. We'll get back to you within 24 hours.",
        position: "bottom-right",
      });

      form.reset();
    } catch (error) {
      CustomToast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        position: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="bg-muted py-10">
        <div className="lg:max-w-[760px] mx-auto max-lg:px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-primary mb-4">
            Why You Need Our Digital Marketing Services?
          </h2>
          <p className="tex-foreground text-center text-sm leading-relaxed">
            We have a track record of 15+ years of experience in the digital
            marketing industry. Our sheer commitment to innovation, client
            satisfaction, and staying on top of the latest technology and
            industry trends are the secrets to our success. Here’s a brief
            overview of our projects:
          </p>
        </div>
      </div>
      <div className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-14">
          <div className="mx-auto grid lg:grid-cols-2 grid-cols-1 shadow-lg rounded-lg overflow-hidden bg-card">
            {/* Form Section */}
            <div className="p-6 lg:p-8">
              <div className="lg:max-w-[760px] mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-foreground mb-4">
                  Request A Quote
                </h2>
                <p className="text-muted-foreground text-center text-sm leading-relaxed">
                  Unlock the full potential of your brand with the best digital
                  marketing company in the USA, ProntoWebsSolution. Contact us
                  and let's discuss how we help you scale your business.
                </p>
              </div>
              <div className="max-w-[890px] mx-auto lg:pr-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Email"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Share your requirements, queries, or feedback here"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <p className="text-xs text-muted-foreground px-2">
                        Share your details so we can schedule a meeting with
                        you.
                      </p>

                      <FormField
                        control={form.control}
                        name="termsOfService"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-xs text-muted-foreground leading-relaxed block">
                                By clicking the button below or entering your
                                information, you consent for ProntoWebsSolution
                                and any affiliate service providers to use
                                automated technology. Including but not limited
                                to texts, phone calls, prerecorded messages,
                                email, or digital technology to contact you at
                                the number and email provided. This is regarding
                                ProntoWebsSolution offers, which may or may not
                                be directly related to this specific marketing
                                campaign using other affiliate companies. This
                                consent is not required to make a purchase.
                                Clicking the button below constitutes your
                                electronic signature. By continuing you agree to
                                our{" "}
                                <Link
                                  href="/terms-of-service"
                                  className="text-primary font-bold hover:underline inline"
                                >
                                  Terms Of Service
                                </Link>{" "}
                                and{" "}
                                <Link
                                  href="/privacy-policy"
                                  className="text-primary font-bold hover:underline inline"
                                >
                                  Privacy Policy
                                </Link>
                                .
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        loading={isLoading}
                        className="w-full md:w-auto"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative md:block hidden">
              <Image
                alt="Contact us - Professional consultation"
                width={480}
                height={640}
                className="lg:absolute lg:object-cover lg:w-full lg:h-full lg:block hidden"
                src="/Contact-Us-Image.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

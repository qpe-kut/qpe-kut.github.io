"use client";

import { useContact } from "@/components/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function ContactForm(): JSX.Element {
  const { form, onSubmit, isLoading } = useContact();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          name="name"
          render={({ field }): JSX.Element => (
            <FormItem>
              <FormLabel className="font-bold">Name:</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }): JSX.Element => (
            <FormItem>
              <FormLabel className="font-bold">Email:</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="message"
          render={({ field }): JSX.Element => (
            <FormItem>
              <FormLabel className="font-bold">Message:</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage>
                {form.formState.errors.message?.message}
              </FormMessage>
            </FormItem>
          )}
        />
        <div className="w-fit mx-auto">
          <Button
            type="submit"
            disabled={isLoading}
            className="font-bold text-white bg-[#1B7AFE] hover:bg-blue-600"
          >
            {isLoading && <Loader2 className="mr-2 animate-spin" />}
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
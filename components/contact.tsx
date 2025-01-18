import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(2, { message: "Message is required." }),
});
type InputType = z.infer<typeof schema>;

export function useContact() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<InputType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    setIsLoading(true);

    const API_GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL;
    if (!API_GATEWAY_URL) {
      console.error("API URL not found.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(API_GATEWAY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast({
          variant: "destructive",
          title: "Someting went wrong.",
          description: "There was a problem with your request.",
        });
        return;
      }

      toast({
        title: "Your inquiry has been sent.",
        description: "Please wait for a while until the answer.",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Someting went wrong.",
        description: "There was a problem with your request.",
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
}

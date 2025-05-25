
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать не менее 2 символов"),
  phone: z.string().min(6, "Введите корректный номер телефона"),
  time: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CallRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CallRequestForm = ({ open, onOpenChange }: CallRequestFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      time: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    try {
      // Создаем mailto ссылку для отправки email
      const subject = `Запрос на обратный звонок от ${data.name}`;
      const body = `
Имя: ${data.name}
Телефон: ${data.phone}
Удобное время для звонка: ${data.time || "Не указано"}

${data.message ? `Комментарий: ${data.message}` : ""}

---
Отправлено с сайта yasnyzvuk.ru
      `.trim();

      const mailtoLink = `mailto:abrayev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Открываем почтовый клиент
      window.location.href = mailtoLink;
      
      // Очищаем форму и закрываем диалог
      form.reset();
      onOpenChange(false);
      toast({
        title: "Запрос подготовлен",
        description: "Ваш почтовый клиент должен открыться для отправки запроса",
      });
    } catch (error) {
      console.error("Error preparing email:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при подготовке запроса",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <Phone className="h-5 w-5 text-brand" />
            Заказать обратный звонок
          </DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в указанное время
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваше имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван Иванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Номер телефона</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (___) ___-__-__" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Удобное время для звонка</FormLabel>
                  <FormControl>
                    <Input placeholder="Например: с 14:00 до 18:00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Комментарий (необязательно)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Дополнительная информация"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Отправить запрос"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CallRequestForm;

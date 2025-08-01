
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, MessageSquareText, Headset } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal = ({ isOpen, onClose }: ChatModalProps) => {
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение! Мы скоро свяжемся с вами.",
      });
      setMessage('');
      setTimeout(onClose, 1500);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white p-0 gap-0 rounded-lg">
        <DialogHeader className="p-4 border-b flex flex-row items-center gap-3">
          <div className="bg-brand/10 p-2 rounded-full">
            <MessageSquareText className="h-6 w-6 text-brand" />
          </div>
          <DialogTitle className="text-lg font-semibold text-gray-800">Чат со специалистом</DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarFallback className="bg-brand/10 text-brand">
                <Headset className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
              <p className="text-sm text-gray-700">
                Здравствуйте! Задайте свой вопрос в поле ниже, и мы скоро вам ответим.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="text-center text-xs text-gray-400 uppercase tracking-wider mb-3">Или свяжитесь с нами</div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" asChild className="border-green-600/30 text-green-700 hover:bg-green-50 hover:text-green-800 transition-colors">
              <a href="https://wa.me/79647801130" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.4 14.38c-.34-.12-1.36-.68-1.57-.76-.21-.08-.37-.12-.52.12-.15.25-.58.76-.7.91-.13.16-.25.18-.47.06-.22-.12-.94-.35-1.8-1.1-.66-.6-1.1-1.34-1.24-1.57-.12-.22-.01-.34.1-.45.1-.1.22-.27.34-.4.11-.14.15-.24.22-.4.07-.14.04-.27-.02-.38-.06-.11-.52-1.3-.72-1.78-.2-.48-.38-.41-.52-.42-.14-.01-.3-.01-.45-.01-.16 0-.4.06-.6.29-.2.23-.77.77-.77 1.87s.8 2.17.9 2.33c.11.15 1.54 2.33 3.6 3.34 2.07 1.01 2.07.67 2.45.63.38-.04 1.23-.49 1.4-.96.18-.47.18-.88.12-.96-.06-.08-.21-.12-.44-.21" />
                  <path d="M20.5 3.48C18.24 1.27 15.21 0 12 0 5.42 0 0.08 5.4 0.08 12.04c0 2.12.55 4.19 1.59 6l-1.7 6.28L6.39 22.7a11.87 11.87 0 0 0 5.61 1.42c6.58 0 11.92-5.4 11.92-12.05 0-3.22-1.26-6.24-3.42-8.58ZM12 22c-1.79 0-3.54-.48-5.07-1.38l-.36-.21-3.77 1 1-3.72-.24-.38A9.97 9.97 0 0 1 2 12.04C2 6.5 6.48 2 12 2c2.67 0 5.17 1.04 7.05 2.93a9.98 9.98 0 0 1 2.92 7.1c0 5.54-4.48 10.05-10 10.05Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="border-blue-500/30 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">
              <a href="https://t.me/yasnyzvuk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M22.0717 3.42905C21.7296 3.15059 21.3302 2.95308 20.9045 2.8513C20.4788 2.74951 20.0372 2.74592 19.6097 2.84077C19.1822 2.93562 18.7793 3.12627 18.4323 3.3992C18.0853 3.67214 17.8028 4.02024 17.6047 4.41705L12.1717 15.9241L8.62375 12.3751C8.22772 11.9841 7.70417 11.7608 7.15705 11.7569C6.60993 11.753 6.08331 11.9688 5.68175 12.3546C5.2802 12.7404 5.03832 13.2586 5.01535 13.8054C4.99237 14.3523 5.18978 14.8851 5.56375 15.2991L10.7457 20.4821C10.9815 20.7181 11.2672 20.8958 11.5805 20.9998C11.8938 21.1038 12.2258 21.131 12.5507 21.0788C12.8756 21.0266 13.184 20.8966 13.4512 20.7C13.7183 20.5034 13.9368 20.2456 14.0887 19.9471L20.6887 6.07205C20.8851 5.65603 20.9822 5.2006 20.9712 4.74051C20.9603 4.28041 20.8416 3.83029 20.6253 3.42547C20.409 3.02064 20.102 2.67317 19.7291 2.41251C19.3563 2.15186 18.928 1.98514 18.4807 1.92805L22.0717 3.42905Z" />
                </svg>
                <span>Telegram</span>
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t bg-gray-50 rounded-b-lg">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ваше сообщение..."
            className="flex-1 bg-white border-gray-300 focus-visible:ring-brand focus-visible:ring-offset-0 rounded-full px-4"
            autoFocus
          />
          <Button type="submit" disabled={!message.trim()} className="bg-brand hover:bg-brand/90 rounded-full shrink-0" size="icon">
            <Send className="h-5 w-5" />
            <span className="sr-only">Отправить</span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;

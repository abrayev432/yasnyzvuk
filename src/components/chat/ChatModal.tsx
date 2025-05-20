
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Whatsapp, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Чат с администратором</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">
              Здравствуйте! Напишите ваш вопрос, и мы ответим вам в ближайшее время. 
              Также вы можете связаться с нами через мессенджеры:
            </p>
            <div className="flex space-x-2 mt-4">
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="https://wa.me/74957990926" target="_blank" rel="noopener noreferrer">
                  <Whatsapp className="h-5 w-5 text-green-600" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="https://t.me/yasnyzvuk" target="_blank" rel="noopener noreferrer">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path 
                      d="M22.0717 3.42905C21.7296 3.15059 21.3302 2.95308 20.9045 2.8513C20.4788 2.74951 20.0372 2.74592 19.6097 2.84077C19.1822 2.93562 18.7793 3.12627 18.4323 3.3992C18.0853 3.67214 17.8028 4.02024 17.6047 4.41705L12.1717 15.9241L8.62375 12.3751C8.22772 11.9841 7.70417 11.7608 7.15705 11.7569C6.60993 11.753 6.08331 11.9688 5.68175 12.3546C5.2802 12.7404 5.03832 13.2586 5.01535 13.8054C4.99237 14.3523 5.18978 14.8851 5.56375 15.2991L10.7457 20.4821C10.9815 20.7181 11.2672 20.8958 11.5805 20.9998C11.8938 21.1038 12.2258 21.131 12.5507 21.0788C12.8756 21.0266 13.184 20.8966 13.4512 20.7C13.7183 20.5034 13.9368 20.2456 14.0887 19.9471L20.6887 6.07205C20.8851 5.65603 20.9822 5.2006 20.9712 4.74051C20.9603 4.28041 20.8416 3.83029 20.6253 3.42547C20.409 3.02064 20.102 2.67317 19.7291 2.41251C19.3563 2.15186 18.928 1.98514 18.4807 1.92805L22.0717 3.42905Z" 
                      fill="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="https://instagram.com/yasnyzvuk" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-pink-600" />
                </a>
              </Button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите сообщение..."
              className="flex-1"
            />
            <Button type="submit" disabled={!message.trim()}>
              <Send className="h-4 w-4 mr-2" />
              Отправить
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;

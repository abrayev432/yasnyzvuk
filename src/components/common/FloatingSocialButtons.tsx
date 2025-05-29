
import { MessageCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatModal from "../chat/ChatModal";

const FloatingSocialButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Социальные кнопки - показываются только когда isExpanded = true */}
        {isExpanded && (
          <div className="mb-3 flex flex-col space-y-2 animate-fade-in">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 bg-green-600 hover:bg-green-700 text-white shadow-lg"
              asChild
            >
              <a 
                href="https://wa.me/79647801130" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Связаться через WhatsApp"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path 
                    d="M17.4 14.38c-.34-.12-1.36-.68-1.57-.76-.21-.08-.37-.12-.52.12-.15.25-.58.76-.7.91-.13.16-.25.18-.47.06-.22-.12-.94-.35-1.8-1.1-.66-.6-1.1-1.34-1.24-1.57-.12-.22-.01-.34.1-.45.1-.1.22-.27.34-.4.11-.14.15-.24.22-.4.07-.14.04-.27-.02-.38-.06-.11-.52-1.3-.72-1.78-.2-.48-.38-.41-.52-.42-.14-.01-.3-.01-.45-.01-.16 0-.4.06-.6.29-.2.23-.77.77-.77 1.87s.8 2.17.9 2.33c.11.15 1.54 2.33 3.6 3.34 2.07 1.01 2.07.67 2.45.63.38-.04 1.23-.49 1.4-.96.18-.47.18-.88.12-.96-.06-.08-.21-.12-.44-.21"
                    fill="currentColor"
                  />
                  <path
                    d="M20.5 3.48C18.24 1.27 15.21 0 12 0 5.42 0 0.08 5.4 0.08 12.04c0 2.12.55 4.19 1.59 6l-1.7 6.28L6.39 22.7a11.87 11.87 0 5.61 1.42c6.58 0 11.92-5.4 11.92-12.05 0-3.22-1.26-6.24-3.42-8.58ZM12 22c-1.79 0-3.54-.48-5.07-1.38l-.36-.21-3.77 1 1-3.72-.24-.38A9.97 9.97 0 2 12.04C2 6.5 6.48 2 12 2c2.67 0 5.17 1.04 7.05 2.93a9.98 9.98 0 2.92 7.1c0 5.54-4.48 10.05-10 10.05Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
              asChild
            >
              <a 
                href="https://t.me/yasnyzvuk" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Связаться через Telegram"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
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
            
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 bg-brand hover:bg-brand/90 text-white shadow-lg"
              onClick={() => setIsChatOpen(true)}
              aria-label="Открыть чат со специалистом"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        )}
        
        {/* Главная кнопка переключения */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-14 w-14 bg-brand hover:bg-brand/90 text-white shadow-lg transition-transform duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Скрыть социальные кнопки" : "Показать социальные кнопки"}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Plus className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingSocialButtons;

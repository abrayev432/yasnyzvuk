
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
                <img 
                  src="https://avatars.mds.yandex.net/i?id=2a8c9230a5d579989c3b105157a23df34316a88b-4119687-images-thumbs&n=13"
                  alt="WhatsApp"
                  className="h-6 w-6"
                />
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
                <img 
                  src="https://avatars.mds.yandex.net/i?id=a83b90d2e2135ad782f79d8342122f344690e789-7552222-images-thumbs&n=13"
                  alt="Telegram"
                  className="h-6 w-6"
                />
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

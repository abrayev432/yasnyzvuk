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
                  viewBox="0 0 175.216 175.552" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <defs>
                    <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#57d163"/>
                      <stop offset="1" stopColor="#23b33a"/>
                    </linearGradient>
                    <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
                      <feGaussianBlur stdDeviation="3.531"/>
                    </filter>
                  </defs>
                  <path 
                    d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.013-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.013 40.557-33.022 73.55-73.578 73.55h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" 
                    fill="url(#b)" 
                    fillRule="evenodd"
                  />
                  <path 
                    d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" 
                    fill="#fff" 
                    fillRule="evenodd"
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

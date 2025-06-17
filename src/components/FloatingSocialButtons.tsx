
import { MessageCircle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ChatModal from "./chat/ChatModal";

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
                href="https://wa.me/79629102391" 
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
                    d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013s12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74s1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" 
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
                  viewBox="0 0 240 240" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <defs>
                    <linearGradient id="tg-gradient" x1="120" y1="0" x2="120" y2="240" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#2AABEE"/>
                      <stop offset="1" stopColor="#229ED9"/>
                    </linearGradient>
                  </defs>
                  <circle cx="120" cy="120" r="120" fill="url(#tg-gradient)"/>
                  <path 
                    d="m98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"
                    fill="#C8DAEA"
                  />
                  <path 
                    d="m98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"
                    fill="#A9C9DD"
                  />
                  <path 
                    d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"
                    fill="#fff"
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

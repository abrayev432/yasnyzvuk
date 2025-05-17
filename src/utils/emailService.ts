
/**
 * Email service mock implementation
 * In a real application, this would connect to an email service provider
 * like SendGrid, Mailgun, etc. or use a backend API endpoint
 */

export const sendCallRequestEmail = async (data: {
  name: string;
  phone: string;
  time?: string;
  message?: string;
}): Promise<boolean> => {
  // This is a mock function that simulates sending an email
  // In a real app, this would call an API endpoint or email service
  
  console.log("Sending call request email with data:", data);
  
  // Simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      // Log what would be sent in a real implementation
      console.log("Email would be sent to: info@yasnyzvuk.ru");
      console.log("Email subject: Запрос на обратный звонок");
      console.log(`Email body: 
        Имя: ${data.name}
        Телефон: ${data.phone}
        Удобное время: ${data.time || "Не указано"}
        Сообщение: ${data.message || "Не указано"}
      `);
      
      resolve(true);
    }, 800);
  });
};

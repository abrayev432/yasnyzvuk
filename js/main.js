
// DOM Elements
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuCloseButton = document.getElementById('mobileMenuCloseButton');
const overlay = document.getElementById('overlay');
const chatOpenButton = document.getElementById('chatOpenButton');
const mobileChatButton = document.getElementById('mobileChatButton');
const chatModal = document.getElementById('chatModal');
const chatCloseButton = document.getElementById('chatCloseButton');
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const cartModalCloseButton = document.getElementById('cartModalCloseButton');
const contactButton = document.getElementById('contactButton');
const callRequestModal = document.getElementById('callRequestModal');
const callModalCloseButton = document.getElementById('callModalCloseButton');
const continueShoppingButton = document.getElementById('continueShoppingButton');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const chatMessages = document.getElementById('chatMessages');
const contactForm = document.getElementById('contactForm');
const callRequestForm = document.getElementById('callRequestForm');
const currentYear = document.getElementById('currentYear');

// Set current year in the footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Helper Functions
function toggleElement(element, show) {
  if (show) {
    element.style.display = 'flex';
    setTimeout(() => {
      element.classList.add('active');
    }, 10);
  } else {
    element.classList.remove('active');
    setTimeout(() => {
      element.style.display = 'none';
    }, 300);
  }
}

function showOverlay() {
  toggleElement(overlay, true);
}

function hideOverlay() {
  toggleElement(overlay, false);
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Event Handlers

// Mobile Menu
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    showOverlay();
  });
}

if (mobileMenuCloseButton) {
  mobileMenuCloseButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hideOverlay();
  });
}

// Chat Modal
if (chatOpenButton) {
  chatOpenButton.addEventListener('click', () => {
    chatModal.style.display = 'flex';
  });
}

if (mobileChatButton) {
  mobileChatButton.addEventListener('click', () => {
    chatModal.style.display = 'flex';
    mobileMenu.classList.remove('open');
    hideOverlay();
  });
}

if (chatCloseButton) {
  chatCloseButton.addEventListener('click', () => {
    chatModal.style.display = 'none';
  });
}

// Cart Modal
if (cartButton) {
  cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    showOverlay();
  });
}

if (cartModalCloseButton) {
  cartModalCloseButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
    hideOverlay();
  });
}

if (continueShoppingButton) {
  continueShoppingButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
    hideOverlay();
    window.location.href = '/catalog.html';
  });
}

// Call Request Modal
if (contactButton) {
  contactButton.addEventListener('click', () => {
    callRequestModal.style.display = 'flex';
    showOverlay();
  });
}

if (callModalCloseButton) {
  callModalCloseButton.addEventListener('click', () => {
    callRequestModal.style.display = 'none';
    hideOverlay();
  });
}

// Close modals when clicking overlay
if (overlay) {
  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    cartModal.style.display = 'none';
    callRequestModal.style.display = 'none';
    hideOverlay();
  });
}

// Chat Functionality
if (sendMessageButton && messageInput) {
  sendMessageButton.addEventListener('click', () => {
    sendMessage();
  });
  
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    appendMessage('user', message);
    messageInput.value = '';
    
    // Simulate response after a short delay
    setTimeout(() => {
      let response = "Спасибо за ваше сообщение! Наш специалист ответит вам в ближайшее время.";
      appendMessage('admin', response);
    }, 1000);
  }
}

function appendMessage(type, text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}`;
  
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;
  
  const time = document.createElement('div');
  time.className = 'message-time';
  time.textContent = formatTime(new Date());
  
  messageDiv.appendChild(bubble);
  messageDiv.appendChild(time);
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Form Submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    this.reset();
  });
}

if (callRequestForm) {
  callRequestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Заявка на обратный звонок принята! Наш специалист свяжется с вами в указанное время.');
    this.reset();
    callRequestModal.style.display = 'none';
    hideOverlay();
  });
}

// Brand Tooltips
const brandCards = document.querySelectorAll('.brand-card');
brandCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const brand = card.getAttribute('data-brand');
    if (brand) {
      const tooltip = document.createElement('div');
      tooltip.className = 'brand-tooltip';
      tooltip.textContent = brand;
      card.appendChild(tooltip);
    }
  });
  
  card.addEventListener('mouseleave', () => {
    const tooltip = card.querySelector('.brand-tooltip');
    if (tooltip) {
      card.removeChild(tooltip);
    }
  });
});

// Handle sticky header
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 10) {
    header.style.padding = '0.5rem 0';
    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
  } else {
    header.style.padding = '1rem 0';
    header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
  }
});

// Simple cart functionality
let cart = [];
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const checkoutButton = document.getElementById('checkoutButton');

// Update cart UI
function updateCart() {
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
  
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Ваша корзина пуста</p>
          <button class="outline-button" id="continueShoppingButton">Перейти в каталог</button>
        </div>
      `;
      if (cartFooter) {
        cartFooter.style.display = 'none';
      }
    } else {
      let itemsHTML = '';
      let total = 0;
      
      cart.forEach((item, index) => {
        itemsHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
              <h4 class="cart-item-name">${item.name}</h4>
              <p class="cart-item-price">${item.price.toLocaleString()} ₽</p>
              <div class="cart-item-quantity">
                <button class="quantity-button" onclick="updateItemQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button" onclick="updateItemQuantity(${index}, 1)">+</button>
                <button class="remove-button" onclick="removeItem(${index})">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        `;
        
        total += item.price * item.quantity;
      });
      
      cartItems.innerHTML = itemsHTML;
      
      if (cartTotalAmount) {
        cartTotalAmount.textContent = `${total.toLocaleString()} ₽`;
      }
      
      if (cartFooter) {
        cartFooter.style.display = 'flex';
      }
    }
  }
}

// Add item to cart
window.addToCart = function(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }
  
  // Show notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = 'Товар добавлен в корзину';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
  
  updateCart();
};

// Update item quantity
window.updateItemQuantity = function(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  
  updateCart();
};

// Remove item from cart
window.removeItem = function(index) {
  cart.splice(index, 1);
  updateCart();
};

// Checkout
if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    alert('Заказ оформлен! Наш менеджер свяжется с вами в ближайшее время.');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
    hideOverlay();
  });
}

// Initialize cart UI
updateCart();

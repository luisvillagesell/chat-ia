document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");
  
    sendButton.addEventListener("click", function() {
      const message = userInput.value.trim();
      if (message !== "") {
        appendMessage("user", message);
        userInput.value = "";
        // Aquí podrías enviar el mensaje al servidor para procesarlo con la IA
      }
    });
  
    function appendMessage(sender, message) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender);
      messageDiv.textContent = message;
      chatMessages.appendChild(messageDiv);
      // Haz scroll automáticamente hacia abajo para mostrar el último mensaje
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  
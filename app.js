onSnapshot(q, (snapshot) => {
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";
    snapshot.forEach((doc) => {
      let msg = doc.data();
      chatBox.innerHTML += `<p>${msg.text}</p>`;
    });
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to latest message
  });

  document.getElementById("message-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  snapshot.forEach((doc) => {
    let msg = doc.data();
    let time = msg.timestamp ? new Date(msg.timestamp.seconds * 1000).toLocaleTimeString() : "";
    chatBox.innerHTML += `<p><strong>${time}:</strong> ${msg.text}</p>`;
  });
  
import { useState, useRef, useEffect } from "react";

import moment from "moment";
import { db } from "./../hooks/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import{auth} from './../hooks/firebaseConfig';

function ChatComponent({conversation, updateMessage}) {

    console.log('conversation', conversation);
    
    const [inputText, setInputText] = useState(""); // Almacena el texto del input

    const chatContainerRef = useRef(null);

  // Efecto para hacer scroll hacia abajo cada vez que cambien los mensajes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]); // Se e
  

 
    // Función para manejar el envío de mensajes
    const handleSendMessage = () => {
        const miId = auth.currentUser?.uid as string
      if (inputText.trim() !== "") {
       // setMessages([...messages, { text: inputText, sender: "user" }]);
        const newMessage = { text: inputText, sender: miId as string , date: Date.now() };
        updateMessage(newMessage);
        //console.log('new message', newMessage);
        setInputText(""); // Limpiar el input después de enviar
      }
    };
    return ( 

        <div className="container mt-5">
        <div className="card">
          <div className="card-header bg-primary text-white">Chat</div>
          <div
            className="card-body"
            style={{ height: "400px", overflowY: "scroll" }}
            ref={chatContainerRef} // Asignamos la referencia al contenedor
          >
            {/* Mostrar mensajes */}
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`d-flex justify-content-${
                  message.sender === auth.currentUser?.uid ? "end" : "start"
                } mb-2`}
              >
                <div
                  className={`alert ${
                    message.sender === "user"
                      ? "alert-primary"
                      : "alert-secondary"
                  }`}
                  style={{ maxWidth: "70%" }}
                >
                  <p>
                    <span className="fs-6 fw-bold">{message.text}</span> {"  "}
                    -<span style={{ fontSize: "0.75rem" }} className="text-muted small">
                      {moment(message.date).format("HH:mm:ss DD/MM/YY")}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe un mensaje..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="btn btn-primary"
                onClick={handleSendMessage}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
     );
}

export default ChatComponent;
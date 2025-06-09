import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useCourt from "../store/useCourt";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useCourt();

  useEffect(() => {
    socket?.on("newMsg", (msg) => {
      // Convert senderId to object if it's a string
      let newMsg = { ...msg };
      if (typeof newMsg.senderId === "string") {
        // Try to find username from previous messages
        const found = messages.find(
          (m) =>
            typeof m.senderId === "object" && m.senderId._id === newMsg.senderId
        );
        if (found && found.senderId && found.senderId.username) {
          newMsg.senderId = {
            _id: newMsg.senderId,
            username: found.senderId.username,
          };
        } else {
          newMsg.senderId = { _id: newMsg.senderId, username: "Unknown" };
        }
      }
      setMessages([...messages, newMsg]);
    });

    return () => {
      socket?.off("newMsg");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;

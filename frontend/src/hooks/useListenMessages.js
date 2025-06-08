import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useCourt from "../store/useCourt";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useCourt();

  useEffect(() => {
    socket?.on("newMsg", (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket?.off("newMsg");
    };
  }, [socket, setMessages, messages]);
};

export default useListenMessages;

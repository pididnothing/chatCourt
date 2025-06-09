import React from "react";
import toast from "react-hot-toast";
import useCourt from "../store/useCourt";
import { useAuthContext } from "../context/authContext";

const useSendMsgs = () => {
  const [loading, setLoading] = React.useState(false);
  const { selectedCourt, setMessages, messages } = useCourt();
  const { authUser } = useAuthContext();
  const sendMsg = async (content) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/court/send-msg/${selectedCourt}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      // const sid = data.message.senderId;
      // data.message.senderId = { _id: sid, username: authUser.username };
      const msgs = [...messages];
      if (res.ok) {
        // Ensure senderId is an object with _id and username
        if (typeof data.message.senderId === "string") {
          data.message.senderId = {
            _id: data.message.senderId,
            username: authUser?.username || "Unknown",
          };
        }
        msgs.push(data.message);
        setMessages(msgs);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMsg };
};

export default useSendMsgs;

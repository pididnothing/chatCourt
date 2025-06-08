import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useCourt from "../store/useCourt";

const useListenCourtStateUpdate = () => {
  const { socket } = useSocketContext();
  const { state, setState } = useCourt();

  useEffect(() => {
    socket?.on("newCourtState", (state) => {
      setState(state);
    });

    return () => {
      socket?.off("newCourtState");
    };
  }, [socket, setState, state]);
};

export default useListenCourtStateUpdate;

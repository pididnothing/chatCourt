import toast from "react-hot-toast";

const useUpdateCourtState = (selectedCourt) => {
  const updateCourtState = async (newState) => {
    try {
      const res = await fetch(
        `/api/court/update-court-state/${selectedCourt}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ state: newState }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        return res;
      } else {
        toast.error(data.error);
        return res;
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong!");
    }
  };
  return { updateCourtState };
};

export default useUpdateCourtState;

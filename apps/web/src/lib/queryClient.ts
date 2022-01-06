import toast from "react-hot-toast";

export const QueryClientOptions = {
  defaultOptions: {
    mutations: {
      onError: (err: any) => {
        if ("message" in (err as Error)) {
          toast.error((err as Error).message);
        }
      },
    },
  },
};

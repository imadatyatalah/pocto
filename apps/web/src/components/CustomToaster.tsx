import { Toaster } from "react-hot-toast";

const CustomToaster = () => (
  <Toaster
    position="bottom-center"
    toastOptions={{
      duration: 4000,
      style: { fontWeight: 500, maxWidth: "100%" },
      success: {},
      error: {},
      loading: {},
    }}
  />
);

export default CustomToaster;

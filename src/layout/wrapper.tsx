import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BookingProvider } from "@/context/booking-context";
import { animationCreate } from "../utils/utils";
import BackToTopCom from "../components/common/back-to-top-com";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
 
  useEffect(() => {
    animationCreate();
  }, []);

  return (
    <BookingProvider>
      {children} 
      <BackToTopCom/>
      <ToastContainer/>
    </BookingProvider>
  );
};

export default Wrapper;
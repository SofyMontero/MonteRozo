import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useBooking } from "@/context/booking-context";
import { closeMobileNav } from "@/utils/scroll-to-section";

type BookAppointmentButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function BookAppointmentButton({
  children,
  className,
  onClick,
  ...props
}: BookAppointmentButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          closeMobileNav();
          openBooking();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}

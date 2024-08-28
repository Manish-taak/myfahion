// Importing components for checkout layout

import ChechoutHeader from "./component/ChechoutHeader";
import Deliveryaddress from "./component/DeliveryAddress";
import Ordersummary from "./component/OrderSummary";
import Paymentoptions from "./component/PaymentOptions";
import OrdersummarySec from "./component/OrderSummarySec";
import Footer from "@/components/Footer";

/**
 * Checkout layout component for displaying the checkout page structure.
 * @component
 * @param {Object} props - Props for the CheckoutLayout component.
 * @param {React.ReactNode} props.children - The children components to be rendered within the layout.
 * @returns {JSX.Element} JSX element representing the CheckoutLayout component.
 */
export default function CheckoutLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  // Order data for the order summary section
  const orderData2 = {
    title: "Order Summary",
    items: [
      { label: "Product Price (3 items)", value: "$60.00", valueClass: "text-blue_gray_600" },
      { label: "GST (Tax 28%)", value: "$4.00", valueClass: "text-blue_gray_600" },
      { label: "Discount", value: "- $30.00", valueClass: "text-light_primary" },
      { label: "Delivery Charges", value: "Free", valueClass: "text-blue_gray_600" },
    ],
    total: "$34.00",
    savings: "You Will Save $30.00 On This Order",
    customStyles: "bg-light-gray"
  };

  return (
    <>
      <ChechoutHeader /> {/* Render the checkout header */}
      <div className="bg-extra_bg">
        <div className="container">
          <div className="flex tab:flex-row flex-col gap-[20px] tab:gap-[30px] justify-between pt-5 tab:pb-[80px] tab:pt-[30px]">
            <div className="flex flex-col gap-y-[10px] md:gap-y-[30px] w-full">
              <Deliveryaddress /> {/* Render the delivery address component */}
              <Ordersummary /> {/* Render the order summary component */}
              <Paymentoptions>
                {children} {/* Render children components within the payment options */}
              </Paymentoptions>
            </div>
            <OrdersummarySec {...orderData2} /> {/* Render the order summary section with data */}
          </div>
        </div>
      </div>
      <Footer /> {/* Render the footer component */}
    </>
  );
}

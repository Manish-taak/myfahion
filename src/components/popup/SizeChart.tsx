import Icons from "@/icons/Index";
import { closepopup } from "@/interFaces/type";
import { forwardRef } from "react";
import sizeChart from "@/json/sizetable.json";

/**
 * SizeChart Component - Displays a size chart in a popup modal.
 *
 * @param {Object} props - Component props
 * @param {Function} props.closepopup - Function to close the popup
 * @param {React.Ref} ref - Forwarded ref to the component
 * @returns {JSX.Element} The SizeChart component
 */
const SizeChart = forwardRef<HTMLDivElement, closepopup>(
  ({ closepopup }, ref) => {
    const headers = Object.keys(sizeChart[0]);

    return (
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md z-[101] max-w-[443px] md:max-w-[510px] w-full "
      >
        <div className="p-5 tab:p-[30px] bg-white rounded-[8px]">
          <div className="items-center border-b border-blue_gray_50 flex justify-between pb-[30px] mb-[30px]">
            <h3 className="text_24 text-blue_gray_800">Size Chart</h3>
            <div className="cursor-pointer" onClick={closepopup}>
              <Icons type="popupclose" />
            </div>
          </div>
          {/* size chart table  */}
          <table className="min-w-full bg-white">
            <thead className="mb-5">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-2   text-center text-sm font-semibold text-gray-700"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody >
              {sizeChart.map((item: any, index: any) => (
                <tr key={index} className="">
                  {headers.map((header) => (
                    <td
                      key={header}
                      className="px-5 py-[10px]   text-sm text-gray-600 text-center"
                    >
                      {item[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        //{" "}
      </div>
    );
  }
);

export default SizeChart;

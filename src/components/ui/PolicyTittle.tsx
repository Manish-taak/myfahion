import { title } from "@/interFaces/type";
import { cn } from "@/utils/cn";

/**
 * PolicyTitle component renders a title with specified styling and text content.
 * 
 * @param {title} props - Props containing title and className.
 * @returns {JSX.Element} - PolicyTitle component UI.
 */
const PolicyTitle = ({ title, className }: title) => {
  return (
    <>
      {/* Container for the policy title */}
      <div>
        {/* Title element with dynamically applied className */}
        <h2 className={cn`text_48_24 text-blue_gray_800 text-center ${className}`}>
          {title}
        </h2>
      </div>
    </>
  );
};

export default PolicyTitle;

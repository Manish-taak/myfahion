import { OverlayProps } from "@/interFaces/type";

/**
 * OverlayCalender component for displaying an overlay based on `isOpen` prop.
 * 
 * @param {OverlayProps} props - Props object containing `isOpen` and `onClose`.
 * @returns {JSX.Element | null} Overlay element if `isOpen` is true, otherwise null.
 */
const OverlayCalender: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
    return isOpen ? (
        <div
            className="fixed inset-0 bg-black opacity-50 z-[100]"
            onClick={onClose}
        />
    ) : null;
};

export default OverlayCalender;

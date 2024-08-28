
import { counterprops } from '@/interFaces/type';  // Importing the interface for props
import { useEffect, useState, useRef } from 'react'; // Importing React hooks

/**
 * Counter component for animating a number from start to end when it becomes visible.
 * @param {counterprops} props - Props object containing start, end, duration, text, description, and numbertext.
 * @returns {JSX.Element} Counter component JSX.
 */
const Counter = ({ start, end, duration, text, description, numbertext }: counterprops): JSX.Element => {
    const [count, setCount] = useState(start); // State for the current count value
    const [isVisible, setIsVisible] = useState(false); // State to check if the component is visible
    const ref = useRef<HTMLDivElement>(null); // Ref to attach to the component for observing visibility

    // Effect to set up the IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set component as visible when it enters the viewport
                    observer.disconnect(); // Disconnect observer after the first intersection
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current); // Observe the current ref
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Clean up observer on component unmount
            }
        };
    }, []);

    // Effect to handle the count animation when the component becomes visible
    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number;
        /**
         * Animation step function to animate the count from start to end over the specified duration.
         * @param {number} timestamp - Current timestamp for animation timing.
         */
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step); // Continue animating if not finished
            }
        };
        window.requestAnimationFrame(step); // Start the animation loop

    }, [isVisible, start, end, duration]);

    return (
        <div className="p-[10px] max-w-[375px]" ref={ref}>
            {/* Display the animated count */}
            <h2 className="text_90_34 2xl:text-[96px] font-bold text-light_primary leading-[100px] ">
                {count.toLocaleString()} {numbertext}+
            </h2>
            {/* Display the text description */}
            <h5 className="text-blue_gray_700 text_24_16 mt-5 ">{text}</h5>
            {/* Display the additional description */}
            <p className="text-blue_gray_500 mt-[10px] text_16_1_12">{description}</p>
        </div>
    );
};

export default Counter;

"use client";

// Import statements for necessary components and libraries
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Paymentcard from '@/components/ui/PaymentCard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure to import CSS for react-toastify
import { cardsoptiontype } from "@/interFaces/type"; // Corrected typo from "interFaces" to "interfaces"
import { CardOption } from "@/validationSchema/checkoutSchema/CardOption";
/**
 * CardsOption component displays a form to add payment cards and manages their storage.
 * @param {Object} props - Component props.
 * @param {boolean} props.addcard - Flag to control card addition form visibility.
 * @param {Function} props.setaddcard - Function to set the visibility flag for card addition form.
 */
const CardsOption: React.FC<cardsoptiontype> = ({ addcard, setaddcard }) => {
    // Initialize useForm hook with yup schema resolver
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(CardOption),
    });

    // State to manage list of cards
    const [cards, setCards] = useState<any>([]);

    // useEffect to load cards from localStorage on component mount
    useEffect(() => {
        const storedCards = JSON.parse(localStorage.getItem("cards") || "[]");
        setCards(storedCards);
    }, []);

    /**
     * Handles form submission to add a new card.
     * @param {Object} data - Form data containing card details.
     * @param {string} data.cardNumber - Full card number input.
     * @param {string} data.expiryDate - Expiry date in MM/YYYY format.
     * @param {string} data.cardHolderName - Name of the card holder.
     */
    const onSubmit = (data: any) => {
        const newCard = {
            bankname: "HDFC Bank",
            digit1: data.cardNumber.slice(0, 4),
            digit2: data.cardNumber.slice(4, 8),
            digit3: data.cardNumber.slice(8, 12),
            digit4: data.cardNumber.slice(12, 16),
            expirymonth: data.expiryDate.split("/")[0],
            expiryyear: data.expiryDate.split("/")[1],
            holdername: data.cardHolderName,
            className: "bg-light_secondary_shades_4p"
        };

        // Check for duplicate cards
        const isDuplicate = cards.some((card: any) => JSON.stringify(card) === JSON.stringify(newCard));

        if (!isDuplicate) {
            // Update cards list, save to localStorage, and show success toast
            const updatedCards = [...cards, newCard];
            setCards(updatedCards);
            localStorage.setItem("cards", JSON.stringify(updatedCards));
            setaddcard(false);
            toast.success("Card added successfully!");
            reset();
        } else {
            // Show error toast if card is duplicate
            toast.error("This card is already saved.");
        }
    };

    return (
        <>
            {/* ToastContainer component from react-toastify */}
            <ToastContainer />

            {/* Main container for displaying saved and adding new cards */}
            <div className="rounded-[14px] bg-white">
                <div className="p-4 lg:p-[30px] bg-white rounded-[14px] mt-[10px] md:mt-[30px]">
                    {/* Section heading for saved cards */}
                    <h2 className="text_20 text-blue_gray_700 border-b-[1px] border-blue_gray_50 pb-[20px] mb-[20px] md:pb-[30px] md:mb-[30px]">
                        Saved cards
                    </h2>
                    <div className="grid gap-y-5 gap-x-[30px] md:grid-cols-2 min-[991px]:grid-cols-1 min-[1190px]:grid-cols-2 2xl:grid-cols-3 place-content-center">
                        {/* Conditional rendering based on presence of cards */}
                        {cards.length === 0 ? (
                            <h3 className="text_24_20 text-blue_gray_700">
                                No saved addresses found. Please add a new Card.
                            </h3>
                        ) : (
                            cards.map((card: any, index: number) => (
                                <Paymentcard
                                    key={index}
                                    bankname={card?.bankname}
                                    digit1={card?.digit1}
                                    digit2={card?.digit2}
                                    digit3={card?.digit3}
                                    digit4={card?.digit4}
                                    expirymonth={card?.expirymonth}
                                    expiryyear={card?.expiryyear}
                                    holdername={card?.holdername}
                                    className={card?.className}
                                />
                            ))
                        )}

                        {/* Button to add new card */}
                        <button
                            onClick={(e) => setaddcard(true)}
                            className="text_20_16_medium text-blue_gray_400 2xl:max-w-[315px] w-full border-[2px] border-dashed border-hf_image p-[7.8%]"
                        >
                            + Add Card
                        </button>
                    </div>

                    {/* Conditional rendering of form to add new card */}
                    {addcard === true && (
                        <div className="p-4 md:p-[30px] bg-white rounded-[14px] border-[1px] border-blue_gray_50 mt-5 lg:mt-[30px]">
                            <h2 className="text_20 text-blue_gray_700 border-b-[1px] border-blue_gray_50 mb-5 pb-5 md:pb-[30px] md:mb-[30px]">
                                Add New Card
                            </h2>

                            {/* Form for adding new card */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[30px]">
                                    {/* Controller for card holder name input */}
                                    <Controller
                                        name="cardHolderName"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label="Card Holder Name"
                                                placeholder="Raj Kumar"
                                                inputclass="w-full"
                                                inputparent="border-[1px] border-blue_gray_100"
                                                error={errors.cardHolderName?.message}
                                            />
                                        )}
                                    />

                                    {/* Controller for card number input */}
                                    <Controller
                                        name="cardNumber"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                label="Card Number"
                                                placeholder="1234 5678 9123 4567"
                                                inputclass="w-full"
                                                inputparent="border-[1px] border-blue_gray_100"
                                                error={errors.cardNumber?.message}
                                            />
                                        )}
                                    />

                                    {/* Grid for expiry date and CVV inputs */}
                                    <div className="grid grid-cols-2 gap-5 md:gap-[30px]">
                                        {/* Controller for expiry date input */}
                                        <Controller
                                            name="expiryDate"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    label="Expiry Date"
                                                    placeholder="03 / 24"
                                                    inputclass="w-full"
                                                    inputparent="border-[1px] border-blue_gray_100"
                                                    error={errors.expiryDate?.message}
                                                />
                                            )}
                                        />

                                        {/* Controller for CVV input */}
                                        <Controller
                                            name="cvv"
                                            control={control}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    label="CVV"
                                                    placeholder="1234"
                                                    inputclass="w-full"
                                                    inputparent="border-[1px] border-blue_gray_100"
                                                    error={errors.cvv?.message}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>

                                {/* Button container for Cancel and Save buttons */}
                                <div className="flex gap-x-[30px] justify-end flex-col-reverse md:flex-row gap-y-5 mt-5 md:mt-[30px]">
                                    {/* Cancel Button */}
                                    <Button
                                        onClick={() => setaddcard(false)}
                                        varient="liquid"
                                        className="border-none text_18 py-[14px] px-[18px] hover:bg-hf_image text-blue_gray_400 rounded-md"
                                    >
                                        CANCEL
                                    </Button>

                                    {/* Save Card Button */}
                                    <Button varient="primary" btntype="submit" className="text_18 py-[14px] px-[18px] lg:max-w-[224px] w-full">
                                        Save Card
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CardsOption;

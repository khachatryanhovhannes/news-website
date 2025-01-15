"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomeLatestBig() {
    const [title, setTitle] = useState("Apple Next-Generation AR Glasses Misha Misha Apple Next-Generation AR Glasses Misha MishaApple Next-Generation AR Glasses Misha MishaApple Next-Generation AR Glasses Misha MishaApple Next-Generation AR Glasses Misha MishaApple Next-Generation AR Glasses Misha MishaApple Next-Generation AR Glasses Misha Misha");
    console.log(title, title.length);
    const [desc, setDesc] = useState("Apple has announced its latest innovation: augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology. augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology.augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology.augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology.augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology.augmented reality (AR) glasses that seamlessly integrate digital information into the physical world. These glasses feature a lightweight design, high-resolution displays, and advanced sensors, aiming to revolutionize user interaction with technology.");
    const [keywords, setKeywords] = useState("#Apple #ARGlasses #AugmentedReality #Innovation #TechNews");
    const [date, setDate] = useState("10.01.2025");
    const [showFullTitle, setShowFullTitle] = useState(false);

    const toggleFullTitle = () => {
        setShowFullTitle(!showFullTitle);
    }
    return (
        <article
            className="w-full h-full bg-black bg-opacity-50 shadow-lg rounded-lg overflow-hidden bg-cover"
            style={{
                backgroundImage: "url('images/appleProduct.jpg')",
            }}
        >
            <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-50">
                <div className="flex flex-col items-end p-5">
                    <p className="border-2 px-3 py-1 rounded-lg mt-1 bg-white text-black font-semibold">
                        {date}
                    </p>
                </div>
                <div className="flex flex-col justify-between p-5">
                    <div className="pb-2 border-2 rounded-lg text-xl text-center pt-2 bg-white text-black">
                        <Link href="https://google.com" className="text-blue-400 hover:underline">
                            {keywords}
                        </Link>

                        {showFullTitle ? (
                            <>
                                <p>{title}</p>
                                <button onClick={toggleFullTitle}>Show Less</button>
                            </>
                        ): (
                            <>
                                <p>{title.slice(0, 10)}</p>
                                <button onClick={toggleFullTitle}>Read More</button>
                            </>

                        )}


                        {/*{showFullTitle ? (*/}
                        {/*    <>*/}
                        {/*        <p>{title}</p>*/}
                        {/*        <button onClick={toggleFullTitle} className="text-blue-400 hover:underline mt-2">*/}
                        {/*            Show Less*/}
                        {/*        </button>*/}
                        {/*    </>*/}
                        {/*) : (*/}
                        {/*    <>*/}
                        {/*        <p>{title.slice(0, 50)}...</p>*/}
                        {/*        <button onClick={toggleFullTitle} className="text-blue-400 hover:underline mt-2">*/}
                        {/*            Read More*/}
                        {/*        </button>*/}
                        {/*    </>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </article>
    );
}

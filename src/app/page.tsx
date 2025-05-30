"use client"
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import {Icon} from "@iconify/react";
import HeroImg from "../../public/IMG_0848.JPEG.jpg";
import Image from "next/image";

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
  enqueueSnackbar("Copied to clipboard!", { variant: "success" });
};

export default function Home() {
  return (
    <SnackbarProvider
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    style={{color:"#fff", backgroundColor:"#893340"}}
    >
     <div className="fixed inset-0 z-10 flex justify-center items-center">
          <div className="bg-white/90 p-12 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <p className="mb-4">Please make your payment to the any of the following accounts:</p>
            <ul>
              <li className="mb-3 flex items-center justify-between">
                <p>Bank: Moniepoint MFN</p>
                <Icon  onClick={() => handleCopy(" Moniepoint MFN")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
              <li className="mb-3 flex items-center justify-between">
                <p>Account Number: 5876138104 </p>
                <Icon  onClick={() => handleCopy(" 6875990836")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
              <li className="mb-3 flex items-center justify-between">
                <p>Account Name: Wine and Steak </p>
                <Icon  onClick={() => handleCopy(" 6875990836")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
            </ul>
            <div className="flex items-center justify-center my-8 w-[95%] gap-x-3 mx-auto">
              <span className="w-full border border-b-1 border-[#893340] border-dashed"></span>
            <h1 className="w-fit mx-auto text-[#893340]">OR</h1>
            <span className="w-full border border-b-1 border-[#893340] border-dashed"></span>
            </div>
            <ul>
              <li className="mb-3 flex items-center justify-between">
                <p>Bank: Z Money</p>
                <Icon  onClick={() => handleCopy(" Moniepoint MFN")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
              <li className="mb-3 flex items-center justify-between">
                <p>Account Number: 1295439496
                </p>
                <Icon  onClick={() => handleCopy(" 6875990836")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
              <li className="mb-3 flex items-center justify-between">
                <p>Account Name: Redhorn (Wine and Steak) </p>
                <Icon  onClick={() => handleCopy(" 6875990836")} icon="line-md:clipboard" width="24" height="24"  style={{color: "#893340"}} />
              </li>
            </ul>
            {/* <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button> */}
          </div>
          <Image src={HeroImg} alt="Hero" fill className="-z-10 absolute" priority /> 
        </div>
    </SnackbarProvider>
  );
}

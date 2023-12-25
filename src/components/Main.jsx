import { useState } from "react";
import TextBox from "./TextBox";

function Main() {
  const [tick, setTick] = useState(`data: {"p": "BTOM20","op","mint","tick","BTOM","amt":"100" }`);
  const [hex, setHex] = useState("723ds327832723f8323hds9723g3272b4749f484f");

  return (
    <main className="max-w-[1300px] mx-auto px-4 pt-20 space-y-6">
      <TextBox value={tick} setValue={setTick} label="Tick" />
      <TextBox value={hex} setValue={setHex} label="Hex" />

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-between px-8 lg:px-12 pt-10">
        <div className="w-full bg-white flex items-center justify-center shadow-[0px_8px_24px_#959da533] rounded-xl px-28 py-12 text-lg font-semibold uppercase cursor-pointer">
          BTOMSCRIBER
        </div>
        <div className="w-full bg-[#fff8f2] flex items-center justify-center shadow-[0px_8px_24px_#959da533] rounded-xl px-28 py-12 text-lg font-semibold uppercase cursor-pointer">
          Copy Text
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-10">
        <p className="text-xl font-semibold">My Assets</p>
        <p className="font-semibold">
          Your Inscrib BTM20 Quantity: <span>10</span>
        </p>
      </div>
    </main>
  );
}

export default Main;

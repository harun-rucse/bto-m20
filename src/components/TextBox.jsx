import toast from "react-hot-toast";
import { MdOutlineContentCopy } from "react-icons/md";

function TextBox({ label, value, setValue }) {
  function handleCopy() {
    navigator.clipboard.writeText(value);
    toast.success("Text copied!");
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-semibold">{label}</span>
      <div className="w-full flex gap-3 items-center justify-between shadow-[0px_8px_24px_#959da533] rounded-lg px-4 py-4">
        <input
          type="text"
          className="bg-transparent w-full text-lg font-semibold focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <MdOutlineContentCopy size={22} color="#fd8725" className="cursor-pointer" onClick={handleCopy} />
      </div>
    </div>
  );
}

export default TextBox;


import { IoCloseOutline } from "react-icons/io5";

const SuccessToast = () => {
  return (
    <div className="w-96 min-w-fit h-20 flex items-center justify-center bg-pb-darker border-l-green-700 border-l-4 border-zinc-700 border-[1px] rounded ">
      <div className="w-full p-5">
        <h2 className="font-semibold text-zinc-300">Success message</h2> 
        <p className="font text-zinc-400">Successfully changed username</p>
      </div>
      <div className="w-10 ml-5">
        <IoCloseOutline className="text-2xl text-red-300 cursor-pointer"/>
      </div>
    </div>
  );
};

export default SuccessToast;

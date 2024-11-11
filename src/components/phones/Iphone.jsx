import PropTypes from "prop-types";
import { IoBatteryFull } from "react-icons/io5";

const Iphone = ({ children, className = "", ...Props }) => {
  return (
    <div
      className={`phone-outter-wrapper flex w-[275px] h-[550px] rounded-[41px] border-[3px] border-pb-green ${className}`}
      {...Props}
    >
      <div className="phone-inner-wrapper relative w-full h-full rounded-[38px] border-[5px] border-pb-darker">

        <header className="flex absolute z-10 top-0 left-0 right-0 items-center justify-between py-2 px-2">
          <div className="w-full flex justify-center">
            <p className="time text-xs font-semibold">12:12p</p>
          </div>
          <div className="w-full flex justify-center">
            <div className="notch flex items-center justify-end p-1 w-14 h-4 bg-pb-darker rounded-lg">
              <div className="cam rounded-full bg-slate-800 w-3 h-3"></div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <IoBatteryFull className="w-5 h-5" />
          </div>
        </header>

        {children}
      </div>
    </div>
  );
};

Iphone.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Iphone;

import Image from "next/image";

type SeatProps = {
    icon: string;
    title: string;
    width?: number;
    height?: number;
};

function Seat({ icon, title, width = 24, height = 24 }: SeatProps) {
    return (
        <li className="flex flex-col p-4 gap-1 text-s h-24.5 items-center justify-center shadow-lg  bg-white text-gray-600 hover:text-red-500 transition-transform hover:scale-103 cursor-pointer">

            <div className="p-3 bg-gray-200  rounded-full mt-3">
                <Image src={icon} alt={title} width={width} height={height}  />
            </div>

            <span className="font-bold">{title}</span>
        </li>
    );



};
export default Seat;
import { IoChevronDown } from "react-icons/io5";

const TechCards = ({ icon, link }) => {
    const onClick = () => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    if (!icon || !link) {
        return null;
    }

    return (
        <div
            className="flex flex-col bg-zinc-800 w-20 px-4 pt-4 pb-2 rounded-lg gap-4 cursor-pointer"
            onClick={onClick}
        >
            <img width={80} height={80} src={icon} alt="Technology icon" />
            <div className="flex justify-center items-center animate-bounce">
                <IoChevronDown color="#9f9fa9" size={30} />
            </div>
        </div>
    );
};

export default TechCards;
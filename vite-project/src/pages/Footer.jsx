import { FaGithub, FaTelegramPlane } from "react-icons/fa";


const socialImgs = [
    {
        name: "Telegramm",
        icon: <FaTelegramPlane />
    },
    {
        name: "GitHub",
        icon: <FaGithub />
    },

];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">

                </div>
                <div className="socials">
                    {socialImgs.map((img, index) => (
                        <div key={index} className="icon">
                            {img.icon}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Права и все такое
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
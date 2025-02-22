import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightColor text-white py-6">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo hoặc tên */}
        <h2 className="text-lg font-bold text-darkColor">Duckilot</h2>

        {/* Mạng xã hội */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-pink-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-400 text-2xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-500 text-2xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>

        {/* Bản quyền */}
        <p className="text-gray-900 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} HCMUS Student.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

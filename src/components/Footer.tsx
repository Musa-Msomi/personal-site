

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-gray-200 py-4 text-center mt-8">
      <p>© {currentYear} Musa Msomi. All rights reserved.</p> 
    </footer>
  );
};

export default Footer;

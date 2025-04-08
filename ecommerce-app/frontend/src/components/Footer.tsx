const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6 text-center">
        <p className="mb-4">© {new Date().getFullYear()} MyStore. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
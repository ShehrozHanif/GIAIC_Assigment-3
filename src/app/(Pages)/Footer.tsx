const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 text-white absolute bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2024 My Website. All rights reserved.</p>
          <div className="flex justify-center gap-10 mt-4">
            <a href="https://twitter.com" className="hover:text-gray-200">Twitter</a>
            <a href="https://facebook.com" className="hover:text-gray-200">Facebook</a>
            <a href="https://linkedin.com" className="hover:text-gray-200">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  


import { useRouter } from 'next/navigation';

const NavigateButtons = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  const goToAbout = () => {
    router.push('/About');
  };

  const goToContact = () => {
    router.push('/Contact');
  };


  return (
    <div className="flex justify-center space-x-4 mt-10">
  <button
    onClick={goToHome}
    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
  >
    Go to Home
  </button>
  
  <button
    onClick={goToContact}
    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
  >
    Go to Contact
  </button>

  <button
    onClick={goToAbout}
    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
  >
    Go to About
  </button>
</div>

  );
};

export default NavigateButtons;


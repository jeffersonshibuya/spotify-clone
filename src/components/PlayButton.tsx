import { FaPlay } from 'react-icons/fa';

const PlayButton = () => {
  return (
    <button
      className="translate flex translate-y-1/4 items-center rounded-full
      bg-green-500 p-4 opacity-0 drop-shadow-md transition duration-300
      hover:scale-110 group-hover:-translate-y-2 group-hover:opacity-100"
    >
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;

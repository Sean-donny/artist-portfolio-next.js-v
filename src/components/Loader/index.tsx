import Image from 'next/image';

const loader = '/loading_gif.gif';

const Loader = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 z-30 bg-black flex items-center justify-center">
      <Image src={loader} alt="x" width={540} height={411} />
    </div>
  );
};

export default Loader;

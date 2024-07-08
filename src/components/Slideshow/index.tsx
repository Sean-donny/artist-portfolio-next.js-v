import Image from 'next/image';

interface SlideshowProps {
  images: string[];
  titles: string[];
}

const Slideshow = ({ images, titles }: SlideshowProps) => {
  const repeatCount = 9;

  return (
    <div className="carousel-container pointer-events-none">
      <div className="carousel-body overflow-hidden pointer-events-none">
        <div className="inner-carousel flex pointer-events-none">
          {images.map((image, index) => (
            <figure className="min-h-slide2 min-w-slide2 px-2" key={image}>
              <Image
                src={image}
                width={818}
                height={1158}
                alt={titles[index]}
                className="pointer-events-none"
                title={titles[index]}
                loading="eager"
              />
            </figure>
          ))}
          {[...Array(repeatCount)].map((_, repeatIndex) =>
            images.map((image, index) => (
              <figure
                className="min-h-slide2 min-w-slide2 px-2"
                key={`${image}-${repeatIndex}-${index}`}
              >
                <Image
                  src={image}
                  width={818}
                  height={1158}
                  alt={titles[index]}
                  className="pointer-events-none"
                  title={titles[index]}
                  loading="eager"
                />
              </figure>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;

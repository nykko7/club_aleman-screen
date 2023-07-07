import Image from "next/image";

import ImageSlider from "./image-slider";

import Image1 from "@/public/assets/image1.jpeg";
import Image2 from "@/public/assets/image2.jpeg";
import Image3 from "@/public/assets/image3.jpeg";
import Image4 from "@/public/assets/image4.jpeg";
import Image5 from "@/public/assets/image5.jpeg";
import Image6 from "@/public/assets/image6.jpeg";
import Image7 from "@/public/assets/image7.jpeg";
import Image8 from "@/public/assets/image8.jpeg";

const imagesToSlider = [
  {
    id: 3,
    src: Image3,
    alt: "Imagen 3",
  },
  {
    id: 4,
    src: Image4,
    alt: "Imagen 4",
  },
  {
    id: 5,
    src: Image5,
    alt: "Imagen 5",
  },
  {
    id: 6,
    src: Image6,
    alt: "Imagen 6",
  },
  {
    id: 7,
    src: Image7,
    alt: "Imagen 7",
  },
  {
    id: 8,
    src: Image8,
    alt: "Imagen 8",
  },
];

const ImageGallery = () => {
  return (
    <>
      <div className="col-span-1 row-span-2">
        <Image
          className="col-span-2 row-span-2 object-cover h-full w-full rounded-[40px]"
          src={Image1}
          alt="Image 1"
        />
      </div>
      <div className="col-span-1 row-span-2">
        <Image
          className="col-span-2 row-span-2 object-cover h-full w-full rounded-[40px]"
          src={Image2}
          alt="Image 2"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <ImageSlider images={imagesToSlider} />
      </div>
    </>
  );
};

export default ImageGallery;

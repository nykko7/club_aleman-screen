import Image from "next/image";

import Image3 from "@/public/assets/image3.jpeg";
import Image2 from "@/public/assets/image2.jpeg";
import Image1 from "@/public/assets/image1.jpeg";

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
        <Image
          className="col-span-2 row-span-2 object-cover h-full w-full rounded-[40px]"
          src={Image3}
          alt="Image 3"
        />
      </div>
    </>
  );
};

export default ImageGallery;

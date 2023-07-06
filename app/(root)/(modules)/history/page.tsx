import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Scroll from "./components/scroll";
import ButtonBack from "@/components/button-back";
 
import ImageHistory from '@/public/assets/history.jpeg'

const HistoryPage = () => {
  return (
    <>
      <Scroll>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Fundación
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
        El Deutscher Verein fue fundada el 2 Mayo de 1860 con el objetivo de promover el interés en la comunidad de nuestro patrimonio alemán, y mostrar la historia a la comunidad, la arquitectura, danza, pintura, música, entre otros. Esto es, para ser un club social.
        </p>
        <AspectRatio ratio={16 / 9} className="bg-muted">
          <Image
            src={ImageHistory}
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
        Los fundadores elaboraron con esa misma fecha los estatutos que aún rigen al Club. Entre los puntos más destacados de los estatutos de 1860 cabe mencionar los siguientes: se funda el Club con los miembros asistentes y pueden pertenecer a él todos los alemanes residentes en el territorio de la colonia alemana de Puerto Montt, excluyéndose aquellos que tienen problemas con la justicia. Entre los objetivos se establece que el Club pretende lograr lazos de fraternidad entre los alemanes residentes, que desde un punto de vista histórico, se encuentran en una “zona de frontera”, es decir, están colonizando, ejerciendo soberanía, produciendo económicamente y también se hace necesaria la creación de esta instancia para desarrollar una vida social armónica y estable.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, ex
          eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet dolor
          lectus eu libero. Vestibulum venenatis eget turpis sed faucibus.
          Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam elit ante,
          luctus non ante sit amet, sodales vulputate odio. Aenean tristique nisl
          tellus, sit amet fringilla nisl volutpat cursus. Quisque dignissim
          lectus ac nunc consectetur mattis. Proin vel hendrerit ipsum, et
          lobortis dolor. Vestibulum convallis, nibh et tincidunt tristique, nisl
          risus facilisis lectus, ut interdum orci nisl ac nunc. Cras et aliquam
          felis. Quisque vel ipsum at elit sodales posuere eget non est. Fusce
          convallis vestibulum dolor non volutpat. Vivamus vestibulum quam ut
          ultricies pretium.
        </p>
      </Scroll>
      <ButtonBack />
    </>
  );
};

export default HistoryPage;

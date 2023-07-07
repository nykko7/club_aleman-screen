import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Scroll from "./components/scroll";
import ButtonBack from "@/components/ui/button-back";

import ImageHistory from "@/public/assets/history.jpeg";

const HistoryPage = () => {
  return (
    <>
      <Scroll>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Fundación
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          El Deutscher Verein fue fundada el 2 Mayo de 1860 con el objetivo de
          promover el interés en la comunidad de nuestro patrimonio alemán, y
          mostrar la historia a la comunidad, la arquitectura, danza, pintura,
          música, entre otros. Esto es, para ser un club social.
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
          Los fundadores elaboraron con esa misma fecha los estatutos que aún
          rigen al Club. Entre los puntos más destacados de los estatutos de
          1860 cabe mencionar los siguientes: se funda el Club con los miembros
          asistentes y pueden pertenecer a él todos los alemanes residentes en
          el territorio de la colonia alemana de Puerto Montt, excluyéndose
          aquellos que tienen problemas con la justicia. Entre los objetivos se
          establece que el Club pretende lograr lazos de fraternidad entre los
          alemanes residentes, que desde un punto de vista histórico, se
          encuentran en una “zona de frontera”, es decir, están colonizando,
          ejerciendo soberanía, produciendo económicamente y también se hace
          necesaria la creación de esta instancia para desarrollar una vida
          social armónica y estable.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          El Club se ha organizado desde sus inicios sobre la base de un
          Directorio compuesto por un Presidente, un Secretario y un Tesorero,
          estableciéndose claramente sus funciones. El Presidente dirige el
          Club, preside la Asamblea; el tesorero debe velar por recaudar los
          fondos y administrarlos; el secretario tiene como función registrar en
          actas lo tratado en las reuniones y preocuparse de la correspondencia.
          En esa época no sólo eran esas las labores que realizaban. El
          Directorio debía hacerse cargo, además, del archivo de revistas que
          poseía. El material impreso era muy escaso en ese tiempo y la
          información a la que podían tener acceso los socios debía estar
          ordenada y organizada. Entre las funciones del Directorio destaca la
          de realización de remates anuales de revistas y libros con el fin de
          generar fondos para adquirir nuevos ejemplares para sus socios. El
          Club era en aquella época un centro social, donde sus socios
          compartían cervezas, se realizaban fiestas, pero también tenía un
          carácter cultural que se evidencia a través de estas funciones del
          directorio.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4">
          Según los Estatutos de 1860, los cargos del directorio son anuales y
          los integrantes del mismo se reunían semanalmente los días miércoles y
          sábados. Las reuniones con todos los socios se hacían una vez al mes y
          a estas Asambleas Generales debían concurrir todos los socios. En
          ellas se proponían sugerencias de mejoramiento del Club, se analizaban
          las solicitudes de los nuevos socios. En las Asambleas, el Directorio
          debía dar cuenta cada tres meses de la situación financiera del Club.
          Tenían estrictas reglas de participación en el Club, ya que debían
          estar al día con sus pagos de cuotas mensuales, debían poseer un
          comportamiento digno dentro y fuera del Club, llegando incluso a
          establecerse la expulsión de alguno de sus miembros, por infringir
          estas reglas, cuando los hechos eran calificados de graves. La
          personería jurídica fue otorgada al Club Alemán el 23 de septiembre de
          1902, lo que consta en el Decreto N° 3392 de ese año y se mantiene
          vigente a la fecha.
        </p>
      </Scroll>
      <ButtonBack />
    </>
  );
};

export default HistoryPage;

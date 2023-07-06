'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <>
      <div className=" space-x-2 flex items-center justify-center w-full">
          <Button
          className="bg-gray text-white rounded-[10px] hover:bg-black mt-9"
          variant="destructive"
          size="lg"
          onClick={() => {router.push("/")}}>
            Volver al inicio
          </Button>
      </div>
    </>
  );
};

export default ButtonBack;

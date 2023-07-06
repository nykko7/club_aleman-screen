"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <>
      <div className=" space-x-2 flex items-center justify-center w-full">
        <Button
          className="mt-9"
          size="lg"
          onClick={() => {
            router.push("/");
          }}
        >
          Volver al inicio
        </Button>
      </div>
    </>
  );
};

export default ButtonBack;

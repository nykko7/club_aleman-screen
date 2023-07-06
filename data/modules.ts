export interface IModule {
  id: number;
  title: string;
  description?: string;
  bgcolor: string;
  color?: string;
}

export const MODULES: IModule[] = [
  {
    id: 1,
    description: "5 Directivos",
    title: "directives",
    bgcolor: "bg-gray-900",
    color: "text-white",
  },
  {
    id: 2,
    description: "120 Socios",
    title: "members",
    bgcolor: "bg-amber-500",
    color: "text-white",
  },
  {
    id: 3,
    description: "Nuestra Historia",
    title: "history",
    bgcolor: "bg-slate-500",
    color: "text-white",
  },
  {
    id: 4,
    description: "Imágenes",
    title: "gallery",
    bgcolor: "bg-slate-300",
    color: "text-gray-900",
  },
];

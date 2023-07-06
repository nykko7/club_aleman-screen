export interface IImage {
  id: number;
  url: string;
  alt: string;
  aspectRatio?: "portrait" | "landscape";
}

export const IMAGES: IImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 1",
    aspectRatio: "portrait",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 2",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 3",
    aspectRatio: "portrait",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Lorem ipsum 4",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 4",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 4",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Lorem ipsum 4",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b3b2b2b2b2b2b2b2b2b2b2b2b2b2b2&auto=format&fit=crop&w=800&q=60",
    alt: "Lorem ipsum 4",
    aspectRatio: "portrait",
  },
];

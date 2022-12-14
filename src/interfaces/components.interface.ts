interface INavigateBtn {
  text: string;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

interface IProductGalleryItem {
  image: {
    src: string;
    height: number | string;
    width: number | string;
    alt: string;
  };
  productName: string;
  countBiletos: number | string;
  article: string;
}

interface IProductGalleryCircle {
  totalPages: number;
  page: number;
  setPage: (index: number) => void;
}
interface ILeftArrowBtn {
  page: number;
  setPage: (index: number) => void;
}
interface IRightArrowBtn extends ILeftArrowBtn {
  totalPages: number;
}

export {
  type INavigateBtn,
  type IProductGalleryItem,
  type IProductGalleryCircle,
  type ILeftArrowBtn,
  type IRightArrowBtn
};

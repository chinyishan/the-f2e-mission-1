//引入 Node.js 的 pathe 模組，用於處理文件路徑
import { filename } from "pathe/utils";

export const useImg = () => {
  const globJpg = import.meta.glob("~/assets/images/*.jpg", {
    eager: true,
  });

  const imagesJpg = Object.fromEntries(
    Object.entries(globJpg).map(([key, value]) => [
      filename(key),
      value.default,
    ])
  );

  const globPng = import.meta.glob("~/assets/images/*.png", {
    eager: true,
  });

  const imagesPng = Object.fromEntries(
    Object.entries(globPng).map(([key, value]) => [
      filename(key),
      value.default,
    ])
  );

  return {
    globJpg,
    imagesJpg,
    globPng,
    imagesPng,
  };
};

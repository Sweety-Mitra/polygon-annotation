import type { Point } from "../types/polygon";

export const exportAnnotation = (points: Point[], isClosed: boolean) => {
  const data = {
    points,
    closed: isClosed,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "annotation.json";
  a.click();
};
import { useState } from "react";
import { PROCESSING_DELAY } from "@/constants/fileUpload";

export const useFileProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = (file: File) => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `Файл "${file.name}" успешно обработан! Найдено 145 номеров, 132 действительных.`,
      );
    }, PROCESSING_DELAY);
  };

  return { isProcessing, processFile };
};

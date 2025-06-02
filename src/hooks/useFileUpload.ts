import { useState } from "react";
import { FILE_VALIDATION } from "@/constants/fileUpload";

export const useFileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File): boolean => {
    return (
      FILE_VALIDATION.allowedTypes.includes(file.type) ||
      FILE_VALIDATION.allowedExtensions.some((ext) => file.name.endsWith(ext))
    );
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setUploadedFile(file);
    } else {
      alert("Пожалуйста, загрузите файл в формате CSV, Excel или TXT");
    }
  };

  const removeFile = () => setUploadedFile(null);

  return {
    dragActive,
    uploadedFile,
    handleDrag,
    handleFile,
    removeFile,
    setDragActive,
  };
};

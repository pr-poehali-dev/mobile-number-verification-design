import { FileValidationConfig } from "@/types/fileUpload";

export const FILE_VALIDATION: FileValidationConfig = {
  allowedTypes: [
    "text/csv",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/plain",
  ],
  allowedExtensions: [".csv", ".txt"],
  maxSize: 5 * 1024 * 1024, // 5MB
  maxCount: 10000,
};

export const PROCESSING_DELAY = 3000;

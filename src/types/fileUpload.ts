export interface UploadedFile {
  file: File;
  size: string;
}

export interface FileValidationConfig {
  allowedTypes: string[];
  allowedExtensions: string[];
  maxSize: number;
  maxCount: number;
}

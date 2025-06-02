import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useFileProcessor } from "@/hooks/useFileProcessor";
import DropZone from "./FileUploader/DropZone";
import FilePreview from "./FileUploader/FilePreview";
import UploadInstructions from "./FileUploader/UploadInstructions";

const FileUploader = () => {
  const {
    dragActive,
    uploadedFile,
    handleDrag,
    handleFile,
    removeFile,
    setDragActive,
  } = useFileUpload();

  const { isProcessing, processFile } = useFileProcessor();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleProcess = () => {
    if (uploadedFile) {
      processFile(uploadedFile);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Массовая проверка номеров
          </h2>
          <p className="text-gray-600">
            Загрузите файл с номерами телефонов для одновременной проверки
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Upload" size={24} className="mr-2 text-blue-600" />
              Загрузка файла
            </CardTitle>
          </CardHeader>

          <CardContent>
            <DropZone
              dragActive={dragActive}
              onDrag={handleDrag}
              onDrop={handleDrop}
              onFileSelect={handleFile}
            />

            {uploadedFile && (
              <FilePreview
                file={uploadedFile}
                onRemove={removeFile}
                onProcess={handleProcess}
                isProcessing={isProcessing}
              />
            )}

            <UploadInstructions />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FileUploader;

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DropZoneProps {
  dragActive: boolean;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileSelect: (file: File) => void;
}

const DropZone = ({
  dragActive,
  onDrag,
  onDrop,
  onFileSelect,
}: DropZoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        dragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
      onDragEnter={onDrag}
      onDragLeave={onDrag}
      onDragOver={onDrag}
      onDrop={onDrop}
    >
      <Icon
        name="CloudUpload"
        size={48}
        className={`mx-auto mb-4 ${dragActive ? "text-blue-500" : "text-gray-400"}`}
      />

      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Перетащите файл сюда или нажмите для выбора
      </h3>

      <p className="text-gray-500 mb-4">
        Поддерживаемые форматы: CSV, Excel, TXT
      </p>

      <Button
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        className="mb-4"
      >
        <Icon name="FolderOpen" size={20} className="mr-2" />
        Выбрать файл
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xlsx,.xls,.txt"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default DropZone;

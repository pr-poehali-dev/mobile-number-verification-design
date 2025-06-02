import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  onProcess: () => void;
  isProcessing: boolean;
}

const FilePreview = ({
  file,
  onRemove,
  onProcess,
  isProcessing,
}: FilePreviewProps) => {
  return (
    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon name="FileText" size={20} className="text-green-600 mr-2" />
          <div>
            <p className="font-medium text-green-800">{file.name}</p>
            <p className="text-sm text-green-600">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        </div>

        <Button onClick={onRemove} variant="ghost" size="sm">
          <Icon name="X" size={16} />
        </Button>
      </div>

      <Button
        onClick={onProcess}
        disabled={isProcessing}
        className="w-full mt-4 bg-green-600 hover:bg-green-700"
      >
        {isProcessing ? (
          <>
            <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
            Обрабатываем...
          </>
        ) : (
          <>
            <Icon name="Play" size={20} className="mr-2" />
            Начать обработку
          </>
        )}
      </Button>
    </div>
  );
};

export default FilePreview;

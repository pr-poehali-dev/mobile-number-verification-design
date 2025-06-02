import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FileUploader = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    const allowedTypes = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/plain",
    ];

    if (
      allowedTypes.includes(file.type) ||
      file.name.endsWith(".csv") ||
      file.name.endsWith(".txt")
    ) {
      setUploadedFile(file);
    } else {
      alert("Пожалуйста, загрузите файл в формате CSV, Excel или TXT");
    }
  };

  const processFile = () => {
    if (!uploadedFile) return;

    setIsProcessing(true);
    // Имитация обработки файла
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        `Файл "${uploadedFile.name}" успешно обработан! Найдено 145 номеров, 132 действительных.`,
      );
    }, 3000);
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
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
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

            {uploadedFile && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon
                      name="FileText"
                      size={20}
                      className="text-green-600 mr-2"
                    />
                    <div>
                      <p className="font-medium text-green-800">
                        {uploadedFile.name}
                      </p>
                      <p className="text-sm text-green-600">
                        {(uploadedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setUploadedFile(null)}
                    variant="ghost"
                    size="sm"
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>

                <Button
                  onClick={processFile}
                  disabled={isProcessing}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700"
                >
                  {isProcessing ? (
                    <>
                      <Icon
                        name="Loader2"
                        size={20}
                        className="mr-2 animate-spin"
                      />
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
            )}

            <div className="mt-6 text-sm text-gray-500">
              <h4 className="font-medium mb-2">Требования к файлу:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Один номер на строку</li>
                <li>Формат: +7XXXXXXXXXX или 8XXXXXXXXXX</li>
                <li>Максимум 10,000 номеров за раз</li>
                <li>Размер файла до 5 МБ</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FileUploader;

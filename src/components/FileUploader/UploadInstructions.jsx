
const UploadInstructions = () => {
  return (
    <div className="mt-6 text-sm text-gray-500">
      <h4 className="font-medium mb-2">Требования к файлу:</h4>
      <ul className="space-y-1 list-disc list-inside">
        <li>Один номер на строку</li>
        <li>Формат: +7XXXXXXXXXX или 8XXXXXXXXXX</li>
        <li>Максимум 10,000 номеров за раз</li>
        <li>Размер файла до 5 МБ</li>
      </ul>
    </div>
  );
};

export default UploadInstructions;

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Icon
            name="Shield"
            size={64}
            className="mx-auto text-blue-600 mb-6"
          />
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Проверьте номер телефона
          <span className="text-blue-600"> за секунды</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Мгновенная проверка валидности номеров телефонов. Загрузите файл или
          введите номер вручную. Получите подробный отчет о статусе, операторе и
          регионе.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать проверку
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-gray-300"
          >
            <Icon name="FileText" size={20} className="mr-2" />
            Загрузить файл
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={24} className="text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Мгновенно</h3>
            <p className="text-gray-600">Результат за 2-3 секунды</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Database" size={24} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Точно</h3>
            <p className="text-gray-600">99.5% точность данных</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Lock" size={24} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Безопасно</h3>
            <p className="text-gray-600">Полная конфиденциальность</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

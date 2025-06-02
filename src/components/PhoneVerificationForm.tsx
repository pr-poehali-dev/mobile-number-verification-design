import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PhoneVerificationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleVerify = async () => {
    if (!phoneNumber.trim()) return;

    setIsLoading(true);
    // Имитация API запроса
    setTimeout(() => {
      setResult({
        number: phoneNumber,
        isValid: Math.random() > 0.3,
        operator: "МТС",
        region: "Московская область",
        type: "Мобильный",
      });
      setIsLoading(false);
    }, 2000);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.slice(0, 11);

    if (limited.length === 0) return "";
    if (limited.length <= 1) return `+${limited}`;
    if (limited.length <= 4)
      return `+${limited.slice(0, 1)} (${limited.slice(1)}`;
    if (limited.length <= 7)
      return `+${limited.slice(0, 1)} (${limited.slice(1, 4)}) ${limited.slice(4)}`;
    return `+${limited.slice(0, 1)} (${limited.slice(1, 4)}) ${limited.slice(4, 7)}-${limited.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Проверить номер телефона
          </h2>
          <p className="text-gray-600">
            Введите номер в формате +7 (xxx) xxx-xx-xx
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Phone" size={24} className="mr-2 text-blue-600" />
              Проверка номера
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  className="pl-12 text-lg"
                />
                <Icon
                  name="Phone"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <Button
              onClick={handleVerify}
              disabled={!phoneNumber.trim() || isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Icon
                    name="Loader2"
                    size={20}
                    className="mr-2 animate-spin"
                  />
                  Проверяем...
                </>
              ) : (
                <>
                  <Icon name="Search" size={20} className="mr-2" />
                  Проверить номер
                </>
              )}
            </Button>

            {result && (
              <Card
                className={`mt-6 ${result.isValid ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Icon
                      name={result.isValid ? "CheckCircle" : "XCircle"}
                      size={24}
                      className={`mr-2 ${result.isValid ? "text-green-600" : "text-red-600"}`}
                    />
                    <h3 className="font-semibold">
                      {result.isValid
                        ? "Номер действителен"
                        : "Номер недействителен"}
                    </h3>
                  </div>

                  {result.isValid && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Оператор:</span>
                        <span className="font-medium">{result.operator}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Регион:</span>
                        <span className="font-medium">{result.region}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Тип:</span>
                        <span className="font-medium">{result.type}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhoneVerificationForm;

import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставим ваш заказ в течение 1-2 дней по всей России",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Все товары проходят строгий контроль качества",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "RotateCcw",
      title: "Легкий возврат",
      description: "Возврат и обмен товара в течение 30 дней",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Наша служба поддержки работает круглосуточно",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Мы заботимся о каждом клиенте и предоставляем лучший сервис
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-purple-500/20"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}
                >
                  <Icon
                    name={benefit.icon as any}
                    className="w-10 h-10 text-white"
                  />
                </div>
                <h3 className="font-bold text-xl mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

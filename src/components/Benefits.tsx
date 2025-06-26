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
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 text-lg">Мы заботимся о каждом клиенте</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={benefit.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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

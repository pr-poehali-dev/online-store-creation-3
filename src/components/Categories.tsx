import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Categories = () => {
  const categories = [
    {
      name: "Женская одежда",
      icon: "Shirt",
      color: "from-pink-500 to-purple-500",
      items: "2,847 товаров",
    },
    {
      name: "Мужская одежда",
      icon: "ShirtIcon",
      color: "from-blue-500 to-indigo-500",
      items: "1,923 товара",
    },
    {
      name: "Детская одежда",
      icon: "Baby",
      color: "from-yellow-500 to-orange-500",
      items: "1,234 товара",
    },
    {
      name: "Обувь",
      icon: "Footprints",
      color: "from-green-500 to-teal-500",
      items: "897 товаров",
    },
    {
      name: "Аксессуары",
      icon: "Watch",
      color: "from-purple-500 to-pink-500",
      items: "654 товара",
    },
    {
      name: "Спорт",
      icon: "Activity",
      color: "from-red-500 to-pink-500",
      items: "432 товара",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Популярные категории
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Найдите именно то, что ищете в нашей тщательно подобранной коллекции
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg hover:shadow-purple-500/10"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <Icon
                    name={category.icon as any}
                    className="w-10 h-10 text-white"
                    fallback="Shirt"
                  />
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {category.items}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

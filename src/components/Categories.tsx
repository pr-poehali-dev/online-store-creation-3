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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Популярные категории</h2>
          <p className="text-gray-600 text-lg">Найдите именно то, что ищете</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={category.icon as any}
                    className="w-8 h-8 text-white"
                    fallback="Shirt"
                  />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.items}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

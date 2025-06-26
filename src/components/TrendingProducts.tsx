import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Стильная куртка",
      price: 5990,
      originalPrice: 7990,
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=500&fit=crop",
      badge: "ХИТ",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Джинсы слим",
      price: 3490,
      originalPrice: 4990,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      badge: "СКИДКА",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Элегантное платье",
      price: 4590,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      badge: "НОВИНКА",
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Кроссовки спорт",
      price: 6990,
      originalPrice: 8990,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      badge: "ТОП",
      rating: 4.7,
      reviews: 203,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Трендовые товары</h2>
          <p className="text-gray-600 text-lg">
            Самые популярные товары этого месяца
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500">
                  {product.badge}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Icon name="Heart" className="w-4 h-4" />
                </Button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-purple-600">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            Посмотреть все товары
            <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

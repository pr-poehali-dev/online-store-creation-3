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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Трендовые товары
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Самые популярные товары этого месяца с эксклюзивными скидками
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white border-0 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-3 py-1 rounded-full shadow-lg">
                  {product.badge}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Icon name="Heart" className="w-5 h-5 text-gray-700" />
                </Button>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price.toLocaleString()} ₽
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through font-medium">
                        {product.originalPrice.toLocaleString()} ₽
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-6 text-lg font-semibold border-2 border-purple-200 hover:bg-purple-50 hover:border-purple-300 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Посмотреть все товары
            <Icon name="ArrowRight" className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

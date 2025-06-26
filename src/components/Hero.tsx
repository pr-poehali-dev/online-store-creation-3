import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-pink-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-4 py-32 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Стиль без границ
            </h1>
            <p className="text-xl md:text-3xl mb-8 opacity-90 animate-fade-in font-light max-w-4xl mx-auto leading-relaxed">
              Откройте для себя коллекцию трендовой одежды, которая подчеркнет
              вашу уникальную индивидуальность
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Icon name="ShoppingBag" className="w-6 h-6 mr-3" />
              Начать покупки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 hover:border-white text-lg px-10 py-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Icon name="Play" className="w-6 h-6 mr-3" />
              Смотреть коллекцию
            </Button>
          </div>

          <div className="pt-16 animate-fade-in">
            <p className="text-white/70 text-sm mb-4">
              Более 50,000 довольных клиентов
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
              <span className="text-white/90 ml-2 font-medium">4.9 из 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

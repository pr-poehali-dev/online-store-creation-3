import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Магазин",
      links: [
        { name: "Женская одежда", href: "/products" },
        { name: "Мужская одежда", href: "/products" },
        { name: "Детская одежда", href: "/products" },
        { name: "Обувь", href: "/products" },
        { name: "Аксессуары", href: "/products" },
      ],
    },
    {
      title: "Информация",
      links: [
        { name: "О компании", href: "/about" },
        { name: "Доставка", href: "/delivery" },
        { name: "Оплата", href: "/payment" },
        { name: "Возврат", href: "/return" },
        { name: "Размерная сетка", href: "/sizes" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { name: "Центр помощи", href: "/help" },
        { name: "Контакты", href: "/contacts" },
        { name: "Политика конфиденциальности", href: "/privacy" },
        { name: "Условия использования", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Telegram", icon: "MessageCircle", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "VK", icon: "ExternalLink", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" },
  ];

  const paymentMethods = [
    "Visa",
    "MasterCard",
    "МИР",
    "Apple Pay",
    "Google Pay",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Будьте в курсе новинок</h3>
            <p className="mb-6">
              Подпишитесь на рассылку и получайте уведомления о скидках и новых
              коллекциях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Icon name="Shirt" className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">StyleHub</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Ваш надежный партнер в мире моды. Мы предлагаем качественную
              одежду по доступным ценам с доставкой по всей России.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+7 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="w-4 h-4 text-purple-400" />
                <span className="text-sm">support@stylehub.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Москва, Тверская ул., 15</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-purple-600"
                >
                  <Icon name={social.icon as any} className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 StyleHub. Все права защищены.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Принимаем к оплате:</span>
            <div className="flex items-center space-x-2">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded px-2 py-1 text-xs text-gray-900 font-medium"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

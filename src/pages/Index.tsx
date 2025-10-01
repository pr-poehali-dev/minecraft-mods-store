import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Modpack {
  id: number;
  title: string;
  description: string;
  version: string;
  price: number;
  image: string;
  downloads: number;
  category: string;
}

const modpacks: Modpack[] = [
  {
    id: 1,
    title: 'Medieval Fantasy Pack',
    description: 'Погрузитесь в средневековый мир с драконами, замками и магией',
    version: '1.20.1',
    price: 299,
    image: '/img/65b64980-bd48-434b-bad6-454960b57faa.jpg',
    downloads: 1547,
    category: 'Приключения'
  },
  {
    id: 2,
    title: 'Industrial Revolution',
    description: 'Технологичная сборка с автоматизацией и современными машинами',
    version: '1.19.2',
    price: 399,
    image: '/img/da4b74aa-9b07-4469-b71f-07ec2e4a031e.jpg',
    downloads: 2103,
    category: 'Технологии'
  },
  {
    id: 3,
    title: 'Magic Realms',
    description: 'Магическая сборка с заклинаниями, артефактами и волшебными существами',
    version: '1.20.1',
    price: 349,
    image: '/img/4076b11c-cc43-499b-8ce9-681624f6a9a7.jpg',
    downloads: 1892,
    category: 'Магия'
  }
];

const faqItems = [
  {
    question: 'Как установить купленную сборку?',
    answer: 'После покупки вы получите ссылку на скачивание и подробную инструкцию по установке. Просто следуйте шагам, и всё установится автоматически.'
  },
  {
    question: 'Какая версия Minecraft нужна?',
    answer: 'Каждая сборка указывает поддерживаемую версию Minecraft. Убедитесь, что у вас установлена соответствующая версия перед покупкой.'
  },
  {
    question: 'Можно ли вернуть деньги?',
    answer: 'Да, мы предоставляем возврат в течение 7 дней после покупки, если сборка не подошла по техническим причинам.'
  },
  {
    question: 'Как получить обновления?',
    answer: 'Все обновления сборок бесплатны для покупателей. Уведомления о новых версиях приходят на email и отображаются в личном кабинете.'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={32} className="text-primary" />
              <span className="text-xl font-bold">MineCraft Store</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => setActiveSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => setActiveSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => setActiveSection('instructions')} className="text-sm font-medium hover:text-primary transition-colors">Инструкция</button>
              <button onClick={() => setActiveSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => setActiveSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>

            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Icon name="User" size={16} />
              Личный кабинет
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Лучшие сборки модов для Minecraft
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Профессиональные модпаки с автоматической установкой, обновлениями и поддержкой
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="gap-2" onClick={() => setActiveSection('catalog')}>
                    <Icon name="ShoppingCart" size={20} />
                    Перейти в каталог
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" onClick={() => setActiveSection('instructions')}>
                    <Icon name="BookOpen" size={20} />
                    Как начать
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Популярные сборки</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modpacks.map((pack) => (
                  <Card key={pack.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={pack.image} 
                        alt={pack.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{pack.title}</CardTitle>
                        <Badge variant="secondary">{pack.version}</Badge>
                      </div>
                      <CardDescription>{pack.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Download" size={16} />
                          {pack.downloads}
                        </div>
                        <Badge variant="outline">{pack.category}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{pack.price} ₽</span>
                      <Button className="gap-2">
                        <Icon name="ShoppingCart" size={16} />
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon name="Zap" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Автоматическая установка</h3>
                    <p className="text-muted-foreground">Один клик — и сборка установлена</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon name="RefreshCw" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Бесплатные обновления</h3>
                    <p className="text-muted-foreground">Получайте новые версии навсегда</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <Icon name="Shield" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Техподдержка 24/7</h3>
                    <p className="text-muted-foreground">Всегда поможем решить проблему</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'catalog' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Каталог сборок</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modpacks.map((pack) => (
                <Card key={pack.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={pack.image} 
                      alt={pack.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl">{pack.title}</CardTitle>
                      <Badge variant="secondary">{pack.version}</Badge>
                    </div>
                    <CardDescription>{pack.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Download" size={16} />
                        {pack.downloads}
                      </div>
                      <Badge variant="outline">{pack.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{pack.price} ₽</span>
                    <Button className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">О нас</h1>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg">
                  Мы — команда энтузиастов Minecraft, которые создают качественные сборки модов для игроков по всему миру.
                </p>
                <p>
                  С 2020 года мы разработали более 50 уникальных модпаков, которые скачали более 100 000 игроков. 
                  Наша цель — сделать Minecraft ещё интереснее и разнообразнее.
                </p>
                <p>
                  Каждая сборка тщательно тестируется, оптимизируется и поставляется с автоматической системой установки 
                  и обновлений. Мы гарантируем стабильную работу всех модов и их совместимость.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'instructions' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Инструкция по установке</h1>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">1</span>
                    Выберите сборку
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Перейдите в каталог и выберите понравившуюся сборку. Обратите внимание на версию Minecraft и системные требования.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">2</span>
                    Оформите покупку
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Нажмите кнопку "Купить" и следуйте инструкциям для оплаты. После оплаты файлы сразу станут доступны в личном кабинете.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">3</span>
                    Скачайте и установите
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Скачайте установщик из личного кабинета и запустите его. Программа автоматически установит все необходимые моды и настройки.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">4</span>
                    Играйте!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Запустите Minecraft через установленный лаунчер и наслаждайтесь игрой с новыми модами!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'faq' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Часто задаваемые вопросы</h1>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Контакты</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" size={24} className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">support@mcstore.ru</p>
                  <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                    Discord
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">discord.gg/mcstore</p>
                  <p className="text-sm text-muted-foreground mt-2">Присоединяйтесь к сообществу</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Send" size={24} className="text-primary" />
                    Telegram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">@mcstore_support</p>
                  <p className="text-sm text-muted-foreground mt-2">Быстрая поддержка в мессенджере</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Globe" size={24} className="text-primary" />
                    Социальные сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">VK, YouTube, Instagram</p>
                  <p className="text-sm text-muted-foreground mt-2">Следите за новостями и обновлениями</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Package" size={24} className="text-primary" />
              <span className="font-semibold">MineCraft Store</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

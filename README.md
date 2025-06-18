# 🎨 Студия Этикеток

> Профессиональный инструмент для создания стильных маркировок и этикеток

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.0+-764ABC?style=for-the-badge&logo=redux)](https://redux-toolkit.js.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components)](https://styled-components.com/)

## ✨ Особенности

- 🎨 **Интуитивный дизайнер** - Создавайте этикетки с живым превью
- 🎯 **Полная настройка** - Цвет текста, фона, размер шрифта, стили
- 💾 **Автосохранение** - Все данные сохраняются в localStorage
- 🔍 **Умный поиск** - Быстрый поиск по тексту этикеток
- 📊 **Статистика** - Отслеживание количества и уникальных цветов
- 📥 **Экспорт данных** - Выгрузка в JSON с метаданными
- 📱 **Адаптивный дизайн** - Работает на всех устройствах
- ⚡ **Высокая производительность** - Оптимизированный Redux Toolkit

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18.18.0 или выше
- npm или yarn

### Установка

1. **Клонируйте репозиторий**

   ```bash
   git clone https://github.com/your-username/studio-etiketok.git
   cd studio-etiketok
   ```

2. **Установите зависимости**

   ```bash
   npm install
   # или
   yarn install
   ```

3. **Запустите в режиме разработки**

   ```bash
   npm run dev
   # или
   yarn dev
   ```

4. **Откройте в браузере**
   ```
   http://localhost:3000
   ```

## 🛠️ Технологический стек

### Frontend

- **Next.js 15** - React фреймворк с App Router
- **React 19** - Библиотека для создания пользовательских интерфейсов
- **TypeScript** - Строгая типизация для надежности кода
- **Redux Toolkit** - Современное управление состоянием
- **styled-components** - CSS-in-JS для стилизации

### Дополнительные библиотеки

- **UUID** - Генерация уникальных идентификаторов
- **React-Redux** - Интеграция React с Redux

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   └── globals.css        # Глобальные стили
├── components/            # React компоненты
│   ├── LabelForm.tsx      # Форма создания/редактирования
│   ├── LabelList.tsx      # Список этикеток
│   ├── LabelItem.tsx      # Элемент списка
│   ├── LabelPreview.tsx   # Превью этикетки
│   └── Providers.tsx      # Redux Provider
├── store/                 # Redux логика
│   ├── store.ts           # Конфигурация store
│   ├── labelsSlice.ts     # Slice для этикеток
│   └── localStorageMiddleware.ts # Middleware для localStorage
├── types/                 # TypeScript типы
│   └── label.ts           # Интерфейсы этикеток
├── hooks/                 # Кастомные хуки
│   └── redux.ts           # Типизированные Redux хуки
└── shared/                # Общие ресурсы
    └── constants/         # Константы приложения
        ├── theme.ts       # Цветовая схема и стили
        └── app.ts         # Конфигурация приложения
```

## 🎯 Основной функционал

### Создание этикеток

- Ввод текста этикетки
- Выбор цвета текста и фона
- Настройка размера шрифта (8-72px)
- Применение стилей (жирный, курсив)
- Живое превью изменений

### Управление коллекцией

- Просмотр всех созданных этикеток
- Редактирование существующих этикеток
- Удаление с подтверждением
- Поиск по тексту
- Статистика использования

### Экспорт и сохранение

- Автоматическое сохранение в localStorage
- Экспорт в JSON с метаданными
- Восстановление после перезагрузки

## 🎨 Дизайн-система

### Цветовая палитра

- **Основной**: `#ff6b6b` (коралловый)
- **Вторичный**: `#4ecdc4` (бирюзовый)
- **Акцент**: `#45b7d1` (голубой)

### Градиенты

- **Главный фон**: `linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)`
- **Карточки**: `linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)`

## 📱 Адаптивность

Приложение полностью адаптировано для всех устройств:

- **Desktop** (1024px+): Двухколоночная сетка
- **Tablet** (768px-1023px): Адаптивная сетка
- **Mobile** (<768px): Одноколоночный layout

## 🔧 Скрипты

```bash
# Разработка
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm run start

# Линтинг
npm run lint
```

## 🚀 Деплой

### Netlify (настроено)

1. **Подключите репозиторий к Netlify**

   - Зайдите на [netlify.com](https://netlify.com)
   - Нажмите "New site from Git"
   - Выберите ваш GitHub репозиторий

2. **Настройки применятся автоматически** благодаря `netlify.toml`:

   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Деплой запустится автоматически**
   - При каждом push в main/master ветку
   - Приложение будет доступно по сгенерированному URL

### Vercel (альтернатива)

1. Подключите репозиторий к Vercel
2. Настройки деплоя применятся автоматически
3. Приложение будет доступно по сгенерированному URL

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

## 👨‍💻 Автор

**Ваше имя**

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) за отличный фреймворк
- [Redux Toolkit](https://redux-toolkit.js.org/) за упрощение работы с Redux
- [styled-components](https://styled-components.com/) за удобную стилизацию

---

<div align="center">
  <strong>Сделано с ❤️ для создания красивых этикеток</strong>
</div>

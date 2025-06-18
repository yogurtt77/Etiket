export const APP_CONFIG = {
  // Основные настройки приложения
  APP_NAME: 'Студия Этикеток',
  APP_VERSION: '1.0.0',
  APP_DESCRIPTION: 'Профессиональный инструмент для создания стильных маркировок и этикеток',
  
  // Ограничения
  MAX_LABELS: 100,
  MAX_TEXT_LENGTH: 200,
  MIN_TEXT_LENGTH: 1,
  MIN_FONT_SIZE: 8,
  MAX_FONT_SIZE: 72,
  DEFAULT_FONT_SIZE: 18,
  
  // Ключи для localStorage
  STORAGE_KEYS: {
    LABELS: 'studio-etiketok-labels-v1',
    SETTINGS: 'studio-etiketok-settings-v1',
    THEME: 'studio-etiketok-theme-v1',
  },
  
  // Сообщения
  MESSAGES: {
    EMPTY_COLLECTION: '🎨 Ваша коллекция этикеток пуста. Создайте первую этикетку с помощью дизайнера выше!',
    NO_SEARCH_RESULTS: '🔍 Этикетки не найдены по вашему запросу. Попробуйте изменить поисковый запрос.',
    DELETE_CONFIRMATION: 'Вы уверены, что хотите удалить эту этикетку? Это действие нельзя отменить.',
    TEXT_REQUIRED: 'Пожалуйста, введите текст этикетки',
    EXPORT_SUCCESS: 'Данные успешно экспортированы!',
    SAVE_SUCCESS: 'Этикетка успешно сохранена!',
    UPDATE_SUCCESS: 'Этикетка успешно обновлена!',
    DELETE_SUCCESS: 'Этикетка удалена!',
  },
  
  // Настройки анимаций
  ANIMATIONS: {
    DURATION: {
      FAST: '0.2s',
      NORMAL: '0.3s',
      SLOW: '0.6s',
    },
    EASING: {
      EASE_OUT: 'ease-out',
      EASE_IN_OUT: 'ease-in-out',
      BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    }
  },
  
  // Предустановленные цвета для быстрого выбора
  PRESET_COLORS: {
    TEXT: [
      '#2c3e50', // Темно-синий
      '#e74c3c', // Красный
      '#27ae60', // Зеленый
      '#f39c12', // Оранжевый
      '#9b59b6', // Фиолетовый
      '#34495e', // Серый
      '#ffffff', // Белый
      '#000000', // Черный
    ],
    BACKGROUND: [
      '#ecf0f1', // Светло-серый
      '#fff5f5', // Светло-розовый
      '#f0fff4', // Светло-зеленый
      '#fffaf0', // Светло-желтый
      '#f5f0ff', // Светло-фиолетовый
      '#f0f8ff', // Светло-голубой
      '#ffffff', // Белый
      '#f8f9fa', // Очень светло-серый
    ]
  },
  
  // Настройки экспорта
  EXPORT: {
    FILE_PREFIX: 'studio-etiketok-export',
    DATE_FORMAT: 'YYYY-MM-DD',
    INCLUDE_METADATA: true,
  }
};

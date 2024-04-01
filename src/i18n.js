import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fa from './locales/fa.json';

const loadLocaleMessages = () => {
  const locales = [{ english: en },{ persian: fa }]
  const messages = {}
  for (const lang of locales) {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  }
  return messages;
}

export default createI18n({
  locale: 'english',
  fallbackLocale: 'english',
  messages: loadLocaleMessages(),
})
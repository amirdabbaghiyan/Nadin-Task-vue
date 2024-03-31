import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fa from './locales/fa.json';

function loadlocaleMessages() {
  const locales = [{ en: en },{ fa: fa }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  })
  return messages;
}
// const i18n = createI18n({
//     loadlocaleMessages
// })
// const i18n = createI18n({
//     locale: "fr",
//     messages: {
//         en: {
//             dashboard: "Dashboard",
//         },
//         fr: {
//             dashboard: "داشبورد",
//         }
//     }
// })
// 
export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadlocaleMessages()
})

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip: move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Cart": "Cart",
      "Sign In": "Sign In",
      "Welcome to BENNY": "Welcome to BENNY",
      "Sign in to your account or create a new one.": "Sign in to your account or create a new one.",
      "BENNY": "BENNY",
      "Elevating everyday essentials. Curated objects for the modern lifestyle.": "Elevating everyday essentials. Curated objects for the modern lifestyle.",
      "All rights reserved.": "All rights reserved.",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service"
    }
  },
  am: {
    translation: {
      "Cart": "ጋሪ",
      "Sign In": "ይግቡ",
      "Welcome to BENNY": "እንኳን ደህና መጡ በቤኒ",
      "Sign in to your account or create a new one.": "በመለያዎ ይግቡ ወይም አዲስ መለያ ይፍጠሩ።",
      "BENNY": "ቤኒ",
      "Elevating everyday essentials. Curated objects for the modern lifestyle.": "የቀን ቀን አስፈላጊ እቃዎችን በማሳደግ ፣ ለወቅታዊ ህይወት የተለያዩ እቃዎችን በማምረት።",
      "All rights reserved.": "ሁሉም መብቶች የተያዙ ናቸው።",
      "Privacy Policy": "የግል ምስጠራ ፖሊሲ",
      "Terms of Service": "የአገልግሎት ውሎች"
    }
  }
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: 'en', // language to use, more info here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;
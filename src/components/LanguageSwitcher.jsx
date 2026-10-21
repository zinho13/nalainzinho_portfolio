
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage("fr")}
        aria-pressed={i18n.language.startsWith("fr")}
      >
        🇫🇷 FR
      </button>

      <button
        onClick={() => changeLanguage("en")}
        aria-pressed={i18n.language.startsWith("en")}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

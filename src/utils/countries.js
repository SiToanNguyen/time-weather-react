// src/utils/countries.js
// Translation utility for country names using ISO 3166-1 alpha-2 codes
import countries from "i18n-iso-countries";

// Import language JSONs
import en from "i18n-iso-countries/langs/en.json";
import de from "i18n-iso-countries/langs/de.json";
import vi from "i18n-iso-countries/langs/vi.json";

countries.registerLocale(en);
countries.registerLocale(de);
countries.registerLocale(vi);

/**
 * Get the country name in the given language.
 * @param {string} code ISO 3166-1 alpha-2 country code
 * @param {string} lang Language code ('en', 'de', 'vi')
 * @returns {string} Localized country name
 */
export function getCountryName(code, lang = "en") {
  if (!code || code.length !== 2) {
    console.warn("Expected ISO country code, got:", code);
    return code;
  }
  return countries.getName(code, lang) || code;
}

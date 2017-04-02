const defaultLocale = 'en_US';

const format = (template, ...args) => {
  return template.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ?
      args[number] :
      match;
  });
};

class I18n {
  constructor(locale) {
    this.locale = locale;
  }

  setLocale = (locale) => {
    this.locale = locale;
  }

  t = (dictionary, ...vars) => {
    try {
      return format(dictionary[this.locale], ...vars);
    } catch (error) {
      return '';
    }
  }
}

// singleton
let i18n = new I18n(defaultLocale);

export const setLocale = (locale) => {
  i18n.setLocale(locale);
}

export const t = (dictionary, ...vars) => {
  return i18n.t(dictionary, ...vars);
}
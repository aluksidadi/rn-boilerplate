const format = (template, ...args) => {
  return template.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] != 'undefined' ?
      args[number] :
      match;
  });
};

class I18n {
  constructor(locale, dictionary) {
    this.locale = locale;
    this.dictionary = dictionary;
  }

  t = (parent, key, ...vars) => {
    try {
      return format(this.dictionary[parent][key][this.locale], ...vars);
    } catch (error) {
      return `*${parent}.${key}*`;
    }
  }
}

// singleton
let i18n = null;

export const configureI18n = (locale, dictionary) => {
  i18n = new I18n(locale, dictionary);
}

export const t = (parent, key, ...vars) => {
  if (i18n) {
    return i18n.t(parent, key, ...vars);
  } else {
    return '';
  }
}
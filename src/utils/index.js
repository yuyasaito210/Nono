import config from './config';

/* eslint-disable import/prefer-default-export */
export function onSortOptions(a, b) {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
}

export function getImageUrl(picture) {
  return `${config.get('api_base_url')}/assets/images/${picture}`;
}

export function getDomain(url) {
  const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  const domain = matches && matches[1];
  return domain;
}

export const PAGE_KEY_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // about-us
export const TRANSLATION_KEY_PATTERN = /^[a-z][a-zA-Z0-9_]*$/; // page_about_title
export const PAGE_PATH_PATTERN = /^[a-zA-Z0-9._\-/]+\.md$/; // pages/about-us.md
export const PAGE_ROUTE_PATTERN =
  /^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*)?$/; // /, /about-us, /corporate/about-us
export const BLOB_SHA_PATTERN = /^[0-9a-f]{40}(?:[0-9a-f]{24})?$/;

export const isValidCard = (card: string) => {
  const digits = card.replace(/\s/g, '');

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]!);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

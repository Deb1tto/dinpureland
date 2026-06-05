export const mainNavItems = [
  ["Profile", "/profile"],
  ["Works", "/works"],
  ["Photography", "/photography"],
  ["Hobbies", "/hobbies"],
  ["Literature", "/literature"],
  ["Index", "/contents"],
  ["Contact", "/contact"],
] as const;

export const pageNavItems = [["Home", "/"], ...mainNavItems] as const;

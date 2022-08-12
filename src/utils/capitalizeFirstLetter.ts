export function capitalizeFirstLetter(str: string) {
  const formatted = str.charAt(0).toUpperCase() + str.slice(1);

  return formatted;
}

export const formatDate = (val) =>
  (val &&
    new Date(val).toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    })) ||
  '';

export const getYears = (start: number) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const years = currentYear - start;
    return currentYear && currentMonth > 0 ? years + 0.5 : years;
};
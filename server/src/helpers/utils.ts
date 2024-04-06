export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password: string, maxLetters: number = 8) => {
    // Проверка на длину пароля
    if (password.length < maxLetters) {
        return false;
    }
    // Проверка на наличие как минимум одной буквы и одной цифры
    const letterRegex = /[a-zA-Z]/;
    const digitRegex = /[0-9]/;
    return letterRegex.test(password) && digitRegex.test(password);
};

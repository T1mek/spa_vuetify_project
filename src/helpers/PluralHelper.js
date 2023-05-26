export default class PluralHelper {
    static timeAgo(date) {
        const currentDate = new Date();
        const timestamp = new Date(date).getTime();
        const currentTimestamp = currentDate.getTime();
        const seconds = Math.floor((currentTimestamp - timestamp) / 1000);

        if (seconds < 60) {
            return 'только что';
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            return `${minutes} минут${minutes % 10 === 1 && minutes !== 11 ? 'у' : minutes % 10 < 5 && minutes % 10 !== 0 && (minutes < 10 || minutes > 20) ? 'ы' : ''} назад`;
        } else if (seconds < 86400) {
            const hours = Math.floor(seconds / 3600);
            return `${hours} час${hours % 10 === 1 && hours !== 11 ? '' : hours % 10 < 5 && hours % 10 !== 0 && (hours < 10 || hours > 20) ? 'а' : 'ов'} назад`;
        } else if (seconds < 604800) {
            const days = Math.floor(seconds / 86400);
            return `${days} ден${days % 10 === 1 && days !== 11 ? 'ь' : days % 10 < 5 && days % 10 !== 0 && (days < 10 || days > 20) ? 'я' : 'ей'} назад`;
        } else if (seconds < 31536000) {
            const weeks = Math.floor(seconds / 604800);
            return `${weeks} недел${weeks % 10 === 1 && weeks !== 11 ? 'ю' : weeks % 10 < 5 && weeks % 10 !== 0 && (weeks < 10 || weeks > 20) ? 'и' : ''} назад`;
        } else {
            const years = Math.floor(seconds / 31536000);
            return `${years} год${years % 10 === 1 && years !== 11 ? '' : years % 10 < 5 && years % 10 !== 0 && (years < 10 || years > 20) ? 'а' : 'ов'} назад`;
        }
    }

    static watchCount(num) {
        return this.plural(num, 'просмотр', 'просмотра', 'просмотров')
    }

    static subscriberCount(num) {
        return this.plural(num, 'подписчик', 'подписчика', 'подписчиков')
    }

    static currencyCount(num) {
        return this.plural(num, 'рубль', 'рубля', 'рублей')
    }

    static plural(num, nominativeSingular, genitiveSingular, genitivePlural) {
        let str;
        const lastDigit = Number(num.toString().slice(-1));
        const lastTwoDigits = Number(num.toString().slice(-2));

        if (lastTwoDigits >= 11 && lastTwoDigits <= 20) {
            str = `${num} ${genitivePlural}`;
        } else if (lastDigit === 1) {
            str = `${num} ${nominativeSingular}`;
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            str = `${num} ${genitiveSingular}`;
        } else {
            str = `${num} ${genitivePlural}`;
        }

        return str;
    }
}

document.getElementById('zodiacForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1; // getMonth() returns 0-11
    const day = birthdate.getDate();

    let zodiacSign = '';

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = 'Aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = 'Pisces';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = 'Sagittarius';
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = 'Capricorn';
    }

    const descriptions = {
        'Aquarius': 'Innovative and independent.',
        'Pisces': 'Compassionate and artistic.',
        'Aries': 'Energetic and courageous.',
        'Taurus': 'Reliable and patient.',
        'Gemini': 'Adaptable and curious.',
        'Cancer': 'Emotional and nurturing.',
        'Leo': 'Confident and charismatic.',
        'Virgo': 'Analytical and meticulous.',
        'Libra': 'Fair-minded and social.',
        'Scorpio': 'Passionate and resourceful.',
        'Sagittarius': 'Adventurous and optimistic.',
        'Capricorn': 'Disciplined and ambitious.'
    };

    document.getElementById('result').innerHTML = `Your Zodiac Sign is <strong>${zodiacSign}</strong>. <br>${descriptions[zodiacSign]}`;
});

export const getDescriptionScore = (num) => {
    let descriptionScore = 'Regular';
    if (num > 2 && num <= 3) {
        descriptionScore = 'Bueno'
    }
    if (num >= 4 && num <= 5) {
        descriptionScore = 'Muy bueno'
    }
    return descriptionScore;
}

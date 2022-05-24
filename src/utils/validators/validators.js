export const requiredField = (value) => {
    if (value) {
        return undefined;
    }
    return 'обязательно к заполнению';   
}




export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `max length ${maxLength} symbol`;
    }
    return undefined;   
}
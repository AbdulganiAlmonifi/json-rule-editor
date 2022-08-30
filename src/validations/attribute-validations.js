
export const validateAttribute = (attribute) => {
    const error = {};
    if (!attribute.name) {
        error.name = 'Please specify the attribute name'
    }

    if (!attribute.type) {
        error.type = 'Please specify the attribute type'
    }

    if (!attribute.weight) {
        error.weight = 'Please specify the attribute weight'
    }
    else if (!isNumeric(attribute.weight)) {
        error.weight = 'Please Only use Numbers'
    }

    return error;
}

export default function attributeValidations(attribute) {
    return validateAttribute(attribute);
}


function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
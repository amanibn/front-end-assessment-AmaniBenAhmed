import {timestampToDays} from '../../../utils';

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpirationDateValid = (value) => {
	let dateNow = new Date()
	timestampToDays(dateNow);
	let newDate = new Date(value)
	timestampToDays(newDate);
	let diff = Math.round(timestampToDays(newDate) - timestampToDays(dateNow));
	return diff>=30
}

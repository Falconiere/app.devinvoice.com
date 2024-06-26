import * as business from "./business";
import * as user from "./userProfile";
const schemas = {
	...user,
	...business,
};
export { schemas };

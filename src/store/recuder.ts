export const INCREASE_CONSTANT = 'increaseConstant';
export const SUBTRACTION = 'subtraction';
interface CountStoreType {
	count: number;
}
export const initCount: CountStoreType = {
	count: 0,
};
const reducer = {
	count(state = initCount, action: any) {
		const { type, payload } = action;
		switch (type) {
			case INCREASE_CONSTANT: {
				const { count } = payload;
				return { count };
			}
			case SUBTRACTION: {
				const { count } = payload;
				return { count };
			}
			default:
				return state;
		}
	},
};
export { reducer };

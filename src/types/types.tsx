export type Advertisement = {
	id: number;
	title: string;
	description: string;
	price: string;
	photo: string;
	area: number;
	country: string;
};
export type Country = {
	value: string;
	flagUrl: string;
	label: React.JSX.Element;
};

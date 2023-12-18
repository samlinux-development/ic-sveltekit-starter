export const idlFactory = ({ IDL }) => {
	return IDL.Service({ sayHelloTo: IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => {
	return [];
};

// Config from file .env
const config = {
	api_host: process.env.REACT_APP_API_HOST,
	site_title: process.env.REACT_APP_SITE_TITLE,
	ongkir_goceng: process.env.REACT_APP_ONGKIR_GOCENG,
	ongkir_mantap: process.env.REACT_APP_ONGKIR_MANTAP,
	ongkir_shopoo: process.env.REACT_APP_ONGKIR_SHOPOO,
	owner: process.env.REACT_APP_OWNER,
	contact: process.env.REACT_APP_CONTACT,
	billing: {
		account_no: process.env.REACT_APP_BILLING_NO,
		bank_name: process.env.REACT_APP_BILLING_BANK
	}
};

export { config };
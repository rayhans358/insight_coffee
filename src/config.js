// Config from file .env
const config = {
	api_host: process.env.REACT_APP_API_HOST,
	site_title: process.env.REACT_APP_SITE_TITLE,
	apk_goceng: process.env.REACT_APP_APK_GOCENG,
	apk_mantap: process.env.REACT_APP_APK_MANTAP,
	apk_shopoo: process.env.REACT_APP_APK_SHOPOO,
	ongkir_goceng: process.env.REACT_APP_ONGKIR_GOCENG,
	ongkir_mantap: process.env.REACT_APP_ONGKIR_MANTAP,
	ongkir_shopoo: process.env.REACT_APP_ONGKIR_SHOPOO,
	owner: process.env.REACT_APP_OWNER,
	contact: process.env.REACT_APP_CONTACT,
	billing: {
		account_no: process.env.REACT_APP_BILLING_NO,
		bank_name1: process.env.REACT_APP_BILLING_BANK1,
		bank_name2: process.env.REACT_APP_BILLING_BANK2,
		bank_name3: process.env.REACT_APP_BILLING_BANK3,
		bank_name4: process.env.REACT_APP_BILLING_BANK4,
		bank_name5: process.env.REACT_APP_BILLING_BANK5,
		bank_name6: process.env.REACT_APP_BILLING_BANK6,
		bank_name7: process.env.REACT_APP_BILLING_BANK7,
		bank_name8: process.env.REACT_APP_BILLING_BANK8,
		bank_name9: process.env.REACT_APP_BILLING_BANK9,
		bank_name10: process.env.REACT_APP_BILLING_BANK10,
		another_transfer1: process.env.REACT_APP_BILLING_ANOTHER1,
		another_transfer2: process.env.REACT_APP_BILLING_ANOTHER2
	}
};

export { config };
import { props, form } from "./show.vue";

export const getInvoice = async () => {
let response = await axios.get(`/api/show_invoice/${props.id}`);
console.log('form', response.data.invoice);
form.value = response.data.invoice;
};

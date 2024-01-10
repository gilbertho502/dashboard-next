'use server';
// los archivos son de servidor, no se ejecuta ni se envia al cliente
export async function createInvoice(formData: FormData){
    console.log('createInvoice', formData);
}
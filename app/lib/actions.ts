'use server';
// los archivos son de servidor, no se ejecuta ni se envia al cliente
import {z} from 'zod'
import { Invoice}  from './definitions'
import { sql } from '@vercel/postgres'

const CreateInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
})

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id: true,
    date: true
})

export async function createInvoice(formData: FormData){
    const { customerId, amount, status } = CreateInvoiceFormSchema.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    })

    const amountiNCents = amount *100
    //fecha actual anio mes dia
    const [date] = new Date().toISOString().split('T')
    // const otherrawFormData =  Object.fromEntries(formData.entries())
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountiNCents}, ${status}, ${date})`
}
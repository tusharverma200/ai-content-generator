
import { boolean,serial, pgTable, varchar, date } from "drizzle-orm/pg-core";


export const AiOutput = pgTable('aiOutput', {
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:varchar('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:date('createdAt')
})

export const UserSubscription = pgTable('userSubscription', {
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:date('joinData')
})
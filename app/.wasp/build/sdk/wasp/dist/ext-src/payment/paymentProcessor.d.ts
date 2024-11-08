import type { PaymentPlan } from './plans';
import type { PaymentsWebhook } from 'wasp/server/api';
import type { MiddlewareConfigFn } from 'wasp/server';
import { PrismaClient } from '@prisma/client';
export interface CreateCheckoutSessionArgs {
    userId: string;
    userEmail: string;
    paymentPlan: PaymentPlan;
    prismaUserDelegate: PrismaClient['user'];
}
export interface FetchCustomerPortalUrlArgs {
    userId: string;
    prismaUserDelegate: PrismaClient['user'];
}
export interface PaymentProcessor {
    id: 'stripe' | 'lemonsqueezy';
    createCheckoutSession: (args: CreateCheckoutSessionArgs) => Promise<{
        session: {
            id: string;
            url: string;
        };
    }>;
    fetchCustomerPortalUrl: (args: FetchCustomerPortalUrlArgs) => Promise<string | undefined>;
    webhook: PaymentsWebhook;
    webhookMiddlewareConfigFn: MiddlewareConfigFn;
}
/**
 * Choose which payment processor you'd like to use, then delete the
 * other payment processor code that you're not using  from `/src/payment`
 */
export declare const paymentProcessor: PaymentProcessor;

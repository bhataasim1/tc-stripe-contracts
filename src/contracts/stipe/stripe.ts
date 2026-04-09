import Stripe from "stripe";

export type StripeEvent = Stripe.Event;
export type StripeAccount = Stripe.Account;
export type StripeCheckoutSession = Stripe.Checkout.Session;
export type StripePaymentMethodType = Stripe.PaymentMethod.Type;
export type StripeSubscription = Stripe.Subscription;
export type StripeSubscriptionUpdateParams = Stripe.SubscriptionUpdateParams
export type StripeSubscriptionCancelParams = Stripe.SubscriptionCancelParams;
export type StripeInvoice = Stripe.Invoice;
export type StripeBillingPortalConfiguration = Stripe.BillingPortal.Configuration;
export type StripePaymentIntent = Stripe.PaymentIntent;
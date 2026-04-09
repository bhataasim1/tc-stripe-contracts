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


// Responses
export type StripeAccountResponse = Stripe.Response<Stripe.Account>;
export type StripeAccountLinkResponse = Stripe.Response<Stripe.AccountLink>;
export type StripeBalanceResponse = Stripe.Response<Stripe.Balance>
export type StripePriceResponse = Stripe.Response<Stripe.Price>
export type StripeCustomerResponse = Stripe.Response<Stripe.Customer>
export type StripeDeletedAccountResponse = Stripe.Response<Stripe.DeletedAccount>
export type StripeCheckoutSessionResponse = Stripe.Response<Stripe.Checkout.Session>
export type StripeBillingPortalSessionResponse = Stripe.Response<Stripe.BillingPortal.Session>
export type StripePaymentIntentResponse = Stripe.Response<Stripe.PaymentIntent>;
export type StripeProductResponse = Stripe.Response<Stripe.Product>
export type StripeSubscriptionResponse = Stripe.Response<Stripe.Subscription>
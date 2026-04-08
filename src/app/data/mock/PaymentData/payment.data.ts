import { CheckoutState } from "../../../core/interfaces/payment.interfaces";

export const CHECKOUT_MOCK_DATA: CheckoutState = {
    steps: [
        { id: 1, label: 'Plan', icon: 'event', isActive: false, isCompleted: true },
        { id: 2, label: 'Payment', icon: 'card', isActive: true, isCompleted: false },
        { id: 3, label: 'Receipt', icon: 'description', isActive: false, isCompleted: false },
        { id: 4, label: 'Confirm', icon: 'check', isActive: false, isCompleted: false }
    ],
    paymentMethods: [
        { id: 'card', name: 'Credit/Debit Card', icon: 'card', description: 'Visa, Mastercard, Amex' },
        { id: 'paypal', name: 'PayPal', icon: 'paypal', description: 'Faster and secure' },
        { id: 'wallet', name: 'Digital Wallet', icon: 'box', description: 'Apple Pay & Google Pay' }
    ],
    orderSummary: {
        planName: 'Aura Premium - Annual',
        planDescription: 'Unlimited 4K HDR streaming on 4 devices',
        price: 119.99,
        billingCycle: 'year',
        subtotal: 119.99,
        taxes: 9.38,
        total: 119.99
    }
};

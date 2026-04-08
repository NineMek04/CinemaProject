export interface PaymentMethod {
    id: string;
    name: string;
    icon: string;
    description: string;
}

export interface OrderSummary {
    planName: string;
    planDescription: string;
    price: number;
    billingCycle: string;
    subtotal: number;
    taxes: number;
    total: number;
}

export interface CheckoutStep {
    id: number;
    label: string;
    icon: string;
    isActive: boolean;
    isCompleted: boolean;
}

export interface CheckoutState {
    steps: CheckoutStep[];
    paymentMethods: PaymentMethod[];
    orderSummary: OrderSummary;
}

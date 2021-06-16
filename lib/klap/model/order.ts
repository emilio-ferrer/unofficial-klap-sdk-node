class Order {
    order_id: string;
    reference_id: string;

    constructor(order_id: string, reference_id: string) {
        this.order_id = order_id;
        this.reference_id = reference_id;
    }

    toJson(): string | undefined {
        return JSON.stringify({});
    }
}

export default Order;

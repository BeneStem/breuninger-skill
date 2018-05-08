interface OrderItem {
  sku: string;
  name: string;
  quantity: number;
  totalPrice: number;
  pricing: {
    normPrice: number;
    normAmount: number;
    normUnit: string;
  };
  orderDate: string;
  orderState: string;
  deliverySplit: {
    parts: number;
    partNumber: number;
  };
  retailer: {
    identifier: string;
    name: string;
  };
  productVariation: {
    productIdentifier: string;
    productVariationIdentifier: string;
    dimensions: {
      color: string[];
      size: string[];
    };
  };
  delivery: {
    deliveryDate: {
      offset: {
        totalSeconds: number;
        id: string;
        rules: {
          transitionRules: string[];
          transitions: string[];
          fixedOffset: boolean;
        };
      };
      dayOfMonth: number;
      dayOfWeek: string;
      dayOfYear: number;
      month: string;
      year: number;
      monthValue: number;
      hour: number;
      minute: number;
      nano: number;
      second: number;
    };
    expectedDeliveryStatement: string;
  };
  shipment: {
    shipmentNumber: string;
    carrier: string;
  };
  _links: {
    retailer: {
      href: string;
      type: string;
      title: string;
    };
    productVariation: {
      href: string;
      type: string;
      title: string;
    };
    productVariationImage: {
      href: string;
      title: string;
    };
    carrierTracking: {
      href: string;
      type: string;
      title: string;
    };
  };
}

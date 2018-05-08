interface OrderItemsHalRepresentation {
  _links: {
    curies: [
      {
        href: string;
        templated: boolean;
        name: string;
      }
      ];
    self: {
      href: string;
    };
    'oi:filter': {
      href: string;
      templated: boolean;
    };
  };
  _embedded: {
    'oi:orderItems': OrderItem[];
  };
  _errors: any[];
  _warnings: any[];
}

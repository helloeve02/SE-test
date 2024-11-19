export interface CartitemInterface {
    ID?: number;
    Quantity?: number;
    CartID?: number;
    ProductID?: number;
}

export interface OrderInterface {
    ID?: number;
    Orderdate?: Date;
    TotalPrice?: number;
    OrderstatusID?: number;     
	UserID?: number;       
	PaymentID?: number;      
}

export interface OrderitemInterface {
    ID?: number;
    Quantity?: number;     
	Price?: number;
	TotalPrice?: number;
	OrderID?: number;   
	ProductID?: number; 
	UserID?: number;
}

export interface OrderstatusInterface {
    ID?: number;
    Status?: number;
}

export interface PaymentInterface {
    ID?: number;
    Amount?: number;    
	PaymentDate?: Date;
}

export interface ProductInterface {
    ID?: number;
    ProductName?: string;
	Description?: string;
	Price?: number;
	StockQuantity?: number;
    UserID?: number;
}

export interface ShippingInterface {
    ID?: number;
    Fee?: number;
	ShippingDate?: Date;
	OrderID?: number;
	ShippingstatusID?: number;
}

export interface ShippingstatusInterface {
    ID?: number;
    Status?: number;
}
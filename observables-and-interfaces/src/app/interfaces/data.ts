export interface Languages {
    id:number;
    name:string;
}

export interface Student{
    id:number;
    name:string;
    age:number;
    phone:number;
    languages:Array<string>;
}

interface Order{
    orderType:string;
    Price:number;
    Volume:number;
}

export interface OrderBook{
    BuyOrders:Array<Order>;
    CreatedtimeStampUtc:string;
    SellOrders:Array<Order>;
}

interface Price{
    bid:string;
    ask:string;
    last:string;
}
export interface LatestPrices{
    status:string;
    prices:{
        btc:Price,
        ltc:Price,
        doge:Price,
    };
}

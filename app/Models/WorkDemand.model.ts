export class WorkDemandModel
{
    ID: number;
    OwnerID:number;
    CategoryID: number;
    WorkStartDate: Date;
    WorkEndDate: Date;
    LocationID: number;
    Description: string;
    OfferedPaymentCurrency: number;
    OfferedPaymentAmount: number;
}
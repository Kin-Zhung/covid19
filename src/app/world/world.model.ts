import { Timestamp } from "rxjs";

 

export interface Stats{
    country:String,
    cases:{
        new: number,
        active: number,
        critical:number,
        recovered:number,
        total:number
    },
    deaths:{
        new:number,
        total:number
    },
    test:{
        total: number
    },
    day: Date,
    time: Date,
    chart:[{name: String,value: number},{name: String,value: number},{name: String,value: number},{name: String,value: number}]
}
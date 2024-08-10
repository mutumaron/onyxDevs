// types.ts
export interface PricingData {
    id: number;
    list1: string[];
    list2: string[];
    content1:string;
    content2:string;
    price: string;
    title1: string;
    title2: string;
    type: 'web' | 'mobile';
  }


export class Listing {
    public price: string;
    public address: string;
    public beds: number;
    public baths: number;
    public squareFeet: number;
    public imageSrc: string;
  
    constructor(price: string, address: string, beds: number, baths: number, squareFeet: number, imageSrc: string) {
      this.price = price;
      this.address = address;
      this.beds = beds;
      this.baths = baths;
      this.squareFeet = squareFeet;
      this.imageSrc = imageSrc;
    }
  }
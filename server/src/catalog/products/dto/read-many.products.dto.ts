import { ReadProductDTO } from "./read.product.dto";

export class ReadManyProductsDTO {
  count: number;

  data: ReadProductDTO[];

  constructor(count: number, data: ReadProductDTO[]) {
    this.count = count;
    this.data = data;
  }
}

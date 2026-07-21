import { IsUUID } from "class-validator";

export class GetProductParams {
  @IsUUID(4)
  productId: string;

  constructor(productId: string) {
    this.productId = productId;
  }
}

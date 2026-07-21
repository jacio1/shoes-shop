import { Product } from "generated/prisma/client";
import { ReadManyProductsDTO, ReadProductDTO } from "../dto";

export class ReadProductsMapper {
  public mapOne(product: Product): ReadProductDTO {
    return {
      id: product.id,
      brand: product.brand,
      sex: product.sex,
      model: product.model,
      size: product.size,
      color: product.color,
      photo: product.photo,
    };
  }

  public mapMany(count: number, data: Product[]): ReadManyProductsDTO {
    return {
      count,
      data: data.map((one) => this.mapOne(one)),
    };
  }
}

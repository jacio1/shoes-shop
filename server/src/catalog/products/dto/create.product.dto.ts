import { IsUrl, Length } from "class-validator";

export class CreateProductDTO {
  @Length(2, 32)
  brand: string;

  @Length(2, 50)
  model: string;

  @Length(2, 16)
  sex: string;

  @Length(2, 10)
  size: string;

  @Length(2, 30)
  category: string;

  @Length(2, 32)
  color: string;

  @IsUrl({ protocols: ["https"] })
  photo: string;

  constructor(
    brand: string,
    model: string,
    sex: string,
    size: string,
    category: string,
    color: string,
    photo: string,
  ) {
    this.brand = brand;
    this.model = model;
    this.sex = sex;
    this.size = size;
    this.category = category;
    this.color = color;
    this.photo = photo;
  }
}

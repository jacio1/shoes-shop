export class ReadProductDTO {
  id: string;

  brand: string;

  sex: string;

  model: string;

  size: string;

  color: string;

  photo: string;

  constructor(
    id: string,
    brand: string,
    sex: string,
    model: string,
    size: string,
    color: string,
    photo: string,
  ) {
    this.id = id;
    this.brand = brand;
    this.sex = sex;
    this.model = model;
    this.size = size;
    this.color = color;
    this.photo = photo;
  }
}

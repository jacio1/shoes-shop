import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  CreateProductDTO,
  ReadManyProductsDTO,
  ReadManyProductsQueryDTO,
  ReadProductDTO,
} from "./dto";
import { PrismaService } from "src/prisma";
import { Prisma } from "generated/prisma/client";
import { ReadProductsMapper } from "./mappers";

@Injectable()
export class ProductsService {
  private readonly mapper = new ReadProductsMapper();

  constructor(private readonly prisma: PrismaService) {}

  async getMany(query: ReadManyProductsQueryDTO): Promise<ReadManyProductsDTO> {
    const model: Prisma.StringFilter | undefined = query.search
      ? { contains: query.search, mode: "insensitive" }
      : undefined;

    const count = await this.prisma.product.count({ where: { model } });

    const data = await this.prisma.product.findMany({
      take: query.take,
      skip: query.skip,
      where: { model },
    });

    return this.mapper.mapMany(count, data);
  }

  async getOne(productId: string): Promise<ReadProductDTO> {
    const product = await this.prisma.product.findFirst({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    return this.mapper.mapOne(product);
  }

  async create(data: CreateProductDTO): Promise<string> {
    await this.checkModel(data.model);

    const { id } = await this.prisma.product.create({ data });

    return id;
  }

  async update(productId: string, data: CreateProductDTO): Promise<void> {
    await this.checkModel(data.model, productId);
    await this.prisma.product.update({
      where: { id: productId },
      data,
    });
  }

  async delete(productId: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id: productId },
    });
  }

  private async checkModel(model: string, productId?: string): Promise<void> {
    const id = productId ? { not: productId } : undefined;

    const existingOne = await this.prisma.product.findFirst({
      where: { model: { equals: model, mode: "insensitive" }, id },
    });

    if (existingOne) {
      throw new ConflictException(`Product ${model} already exists`);
    }
  }
}

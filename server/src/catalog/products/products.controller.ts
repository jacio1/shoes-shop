import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import {
  CreateProductDTO,
  GetProductParams,
  ReadManyProductsDTO,
  ReadManyProductsQueryDTO,
  ReadProductDTO,
} from "./dto";

@Controller("products")
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  getMany(
    @Query() query: ReadManyProductsQueryDTO,
  ): Promise<ReadManyProductsDTO> {
    return this.service.getMany(query);
  }

  @Get(":productId")
  getOne(@Param() { productId }: GetProductParams): Promise<ReadProductDTO> {
    return this.service.getOne(productId);
  }

  @Post()
  async create(@Body() data: CreateProductDTO): Promise<ReadProductDTO> {
    const id = await this.service.create(data);
    return this.service.getOne(id);
  }

  @Put(":productId")
  async update(
    @Param() { productId }: GetProductParams,
    @Body() data: CreateProductDTO,
  ): Promise<ReadProductDTO> {
    await this.service.update(productId, data);
    return this.service.getOne(productId);
  }

  @Delete(":productId")
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param() { productId }: GetProductParams): Promise<void> {
    return this.service.delete(productId);
  }
}

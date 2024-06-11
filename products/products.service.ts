import { Injectable } from "@nestjs/common";
import ProductDto from "./product.dto";
import { Repository } from "typeorm";
import { Product } from "./product.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export default class ProductsService {
    private static products: ProductDto[] = [
        new ProductDto("1", "Product1"),
        new ProductDto("2", "Product2"),
        new ProductDto("3", "Product3"),
        new ProductDto("4", "Product4"),
        new ProductDto("5", "Product5"),
    ];

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>
    ) {}

    findAll() {
        return this.productRepository.find();
    }

    findById(id: number): Promise<Product | null> {
        return this.productRepository.findOneBy({id});
    }
}
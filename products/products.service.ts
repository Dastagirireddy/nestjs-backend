import { Injectable } from "@nestjs/common";

@Injectable()
export default class ProductsService {
    findAll() {
        return [{
            id: 1,
            name: 'Product1'
        }];
    }
}
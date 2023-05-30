import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/Product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ServiceComponent, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"))

      this.productService.getOne(id).subscribe(product => this.product = product)
    })
  }
}

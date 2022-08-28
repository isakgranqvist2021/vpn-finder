import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  public newFeature: string = "";
  public product: Omit<Product, '_id'> = {
    title: '',
    description: '',
    image: '',
    affiliateUrl: '',
    hasFreeOption: false,
    draft: false,
    onSale: false,
    discount: 0,
    rating: 0,
    features: [],
  };

  constructor(private createService: ProductService) {}

  createProduct() {
    this.createService.createProduct(this.product).subscribe((res) => {
      if (res.success) {
        window.alert('Created');
      } else {
        window.alert(res.message);
      }
    });
  }

  onFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) {
     window.alert("No file")
     return;
   }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result?.toString();
      if (result) {
        this.product.image = result;
      }
    }

    reader.onerror = () => window.alert('Upload failed');
  }

  addFeature() {
    if (this.newFeature.length) {
      this.product?.features.push({ label: this.newFeature });
      this.newFeature = '';
    }
  }
}

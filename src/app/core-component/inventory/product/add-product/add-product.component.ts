import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService, SidebarService, routes } from 'src/app/core/core.index';
import { ProdutService } from 'src/app/service/product/produt.service';
import Swal from 'sweetalert2';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  isProductVisible: boolean = true;
  isProductVisible1: boolean = true;
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';
  public selectedValue9 = '';
  public selectedValue10 = '';
  public selectedValue11 = '';

  selectedList1: data[] = [
    { value: 'Choose' },
    { value: 'Thomas' },
    { value: 'Rasmussen' },
    { value: 'Fred john' },
  ];
  selectedList2: data[] = [
    { value: 'Choose' },
    { value: 'Legendary' },
    { value: 'Determined' },
    { value: 'Sincere' },
  ];
  selectedList3: data[] = [
    { value: 'Choose' },
    { value: 'Lenovo' },
    { value: 'Electronics' },
  ];
  selectedList4: data[] = [
    { value: 'Choose' },
    { value: 'Lenovo' },
    { value: 'Electronics' },
  ];
  selectedList5: data[] = [
    { value: 'Choose' },
    { value: 'Fruits' },
    { value: 'Computers' },
    { value: 'Shoes' },
  ];
  selectedList6: data[] = [
    { value: 'Choose' },
    { value: 'Nike' },
    { value: 'Bolt' },
  ];
  selectedList7: data[] = [
    { value: 'Choose' },
    { value: 'Kg' },
    { value: 'Pc' },
  ];
  selectedList8: data[] = [{ value: 'Exclusive' }, { value: 'Sales Tax' }];
  selectedList9: data[] = [
    { value: 'Choose' },
    { value: 'Percentage' },
    { value: 'Cash' },
  ];
  selectedList10: data[] = [
    { value: 'Choose' },
    { value: 'Percentage' },
    { value: 'Cash' },
  ];
  selectedList11: data[] = [
    { value: 'Choose' },
    { value: 'Code34' },
    { value: 'Code35' },
    { value: 'Code36' },
  ];
  selectedList12: data[] = [
    { value: 'Choose' },
    { value: 'Code34' },
    { value: 'Code35' },
    { value: 'Code36' },
  ];

  productForm!: FormGroup;
  constructor(private sidebar: SidebarService, private produitService: ProdutService,private router: Router,private data : DataService, private fb:FormBuilder) {}
  ngOnInit(): void {
    this.getAllCategory();

     this.productForm = this.fb.group({
          name: ['', Validators.required],
        
          category:['', Validators.required],
          description: [ '', [Validators.required, Validators.maxLength(60)]],
      
          price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
          stockQuantity: ['', [Validators.required, Validators.min(0)]],
         
        });
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
  }

  public image: boolean[] = [true, true, true];

  public removeImg(index: number) {
    this.image[index] = !this.image[index];
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  category:any
  getAllCategory(){
    this.data.getAllCategory().subscribe(data=>{
      this.category = data
    })
}

   confirmColor() {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: ' btn btn-success',
            cancelButton: 'me-2 btn btn-danger'
          },
          buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Etes Vous Sure ?',
          text: "De Vouloir Modifier Le Produit",
          confirmButtonText: 'Oui',
          showCancelButton: true,
          cancelButtonText: 'Non',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
  
            if (this.productForm.valid) {
              const formData = this.productForm.getRawValue(); // Inclut les champs désactivés
              formData.category = {id:formData.category}
              console.log(formData);
          
              // Appeler le service pour mettre à jour le produit
              this.produitService.createProduct(formData).subscribe({
                next: (response) => {
                  console.log('Produit mis à jour avec succès', response);
                  swalWithBootstrapButtons.fire(
                    'Succes!',
                    'Le Produit a Bien été Mis a Jour',
                    'success'
                  ).then((result) => {
                    // Vérifiez si l'utilisateur a cliqué sur "OK" ou sur un autre bouton
                    if (result) {
                      // Rediriger vers une autre page
                      this.router.navigate([routes.productList]) // Remplacez '/nouvelle-page' par l'URL de votre choix
                    }});
                },
                error: (error) => {
                  console.error('Erreur lors de la mise à jour du produit', error);
                },
              });
            } else {
              console.error('Le formulaire contient des erreurs');
            } 
           
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Fermer',
              'Vous Avez Abandonner ',
              'error'
            )
          }
        })
      }
}

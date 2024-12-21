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
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent implements OnInit{
  public routes = routes
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
  public selectedValue12 = '';
  public selectedValue13 = '';
  public selectedValue14 = '';
  public selectedValue15 = '';
  public selectedValue16 = '';
  public selectedValue17 = '';
  public image: boolean[] = [true, true, true];

  selectedList1: data[] = [
    { value: 'Thomas' },
    { value: 'Rasmussen' },
    { value: 'Fred john' },
  ];
  selectedList2: data[] = [
    { value: 'Legendary' },
    { value: 'Determined' },
    { value: 'Sincere' },
  ];
  selectedList3: data[] = [{ value: 'Lenovo' }, { value: 'Electronics' }];
  selectedList4: data[] = [{ value: 'Lenovo' }, { value: 'Electronics' }];
  selectedList5: data[] = [
    { value: 'Fruits' },
    { value: 'Computers' },
    { value: 'Shoes' },
  ];
  selectedList6: data[] = [{ value: 'Nike' }, { value: 'Bolt' }];
  selectedList7: data[] = [{ value: 'Kg' }, { value: 'Pc' }];
  selectedList8: data[] = [
    { value: 'Transactional selling' },
    { value: 'Solution selling' },
  ];
  selectedList9: data[] = [
    { value: 'Code34' },
    { value: 'Code35' },
    { value: 'Code36' },
  ];
  selectedList10: data[] = [{ value: 'Exclusive' }, { value: 'Sales Tax' }];
  selectedList11: data[] = [{ value: 'Percentage' }, { value: 'Cash' }];
  selectedList12: data[] = [
    { value: 'Choose' },
    { value: 'Color' },
    { value: 'Red' },
    { value: 'Black' },
  ];
  selectedList13: data[] = [{ value: 'Percentage' }, { value: 'Cash' }];
  selectedList14: data[] = [{ value: 'Choose' }, { value: 'Code34' }];
  selectedList15: data[] = [
    { value: 'Choose' },
    { value: 'Direct' },
    { value: 'Indirect' },
  ];
  selectedList16: data[] = [
    { value: 'Choose' },
    { value: 'Income Tax' },
    { value: 'Service Tax' },
  ];
  selectedList17: data[] = [
    { value: 'Choose' },
    { value: 'Percentage' },
    { value: 'Early Payment' },
  ];
  constructor(private sidebar: SidebarService, private fb:FormBuilder ,private data : DataService, private produitService: ProdutService,private router: Router,)  {}
  ngOnInit(): void {
    this.getAllCategory();
    this.productData = history.state.product;

    // Initialiser le formulaire avec les données du produit
    this.productForm = this.fb.group({
      name: [this.productData?.name || '', Validators.required],
      id: [{ value: this.productData?.id || '', disabled: true }], // Champ désactivé si non modifiable
      category:[this.productData?.category?.id || '', Validators.required],
      description: [this.productData?.description || '', [Validators.required, Validators.maxLength(60)]],
  
      price: [this.productData?.price || '', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      stockQuantity: [this.productData?.stockQuantity || '', [Validators.required, Validators.min(0)]],
     
    });
  }
  saveChanges(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.getRawValue(); // Inclut les champs désactivés
      formData.category = {id:formData.category}
      console.log(formData);
  
      // Appeler le service pour mettre à jour le produit
      this.produitService.updateProduct(formData).subscribe({
        next: (response) => {
          console.log('Produit mis à jour avec succès', response);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour du produit', error);
        },
      });
    } else {
      console.error('Le formulaire contient des erreurs');
    } 
  }
  productForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productData: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  category : any;
  public removeImg(index: number) {
    this.image[index] = !this.image[index];
  }  

  getAllCategory(){
      this.data.getAllCategory().subscribe(data=>{
        this.category = data
      })
  }
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.sidebar.toggleCollapse();
    this.isCollapsed = !this.isCollapsed;
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
            this.produitService.updateProduct(formData).subscribe({
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

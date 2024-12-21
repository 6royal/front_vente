import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService, SidebarService, apiResultFormat, pageSelection } from 'src/app/core/core.index';
import { routes } from 'src/app/core/helpers/routes';
import { pospurchase } from 'src/app/shared/model/page.model';
import { PaginationService, tablePageSize } from 'src/app/shared/shared.index';
import Swal from 'sweetalert2';
import { BrowserQRCodeReader } from '@zxing/library';
import { ProdutService } from 'src/app/service/product/produt.service';
import { Product } from 'src/app/classe/product';
import { OrderService } from 'src/app/service/order/order.service';

interface data {
  value: string;
}



@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss'
})
export class PosComponent {
  
  transactionID: number=1 ;
   today = new Date(); // Récupération de la date du jour
  formattedDate = this.today.toISOString().split('T')[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[] = [];

  selectedValue3 = 5; // Default GST in percentage
  selectedValue4 = 15; // Default shipping cost
  selectedValue5 = 10; // Default discount in percentage
  get subTotal(): number {
    return this.cartProducts.reduce((acc, product) => acc + product.price * product.qty, 0);
  }

  get taxAmount(): number {
    return (this.subTotal * this.selectedValue3) / 100;
  }

  get shipping(): number {
    return this.selectedValue4;
  }

  get discountAmount(): number {
    return (this.subTotal * this.selectedValue5) / 100;
  }

  get total(): number {
    return this.subTotal + this.taxAmount + this.shipping - this.discountAmount;
  }

  cartProducts: Product[] = [];

  allProduct(){
    this.productService.getAllProduct().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    }

    )
  }
  
  submitOrder():void{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    
      
    }
  
  addToCart(product: Product): void {
    const existingProduct = this.cartProducts.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.qty++;
    } else {
      this.cartProducts.push({ ...product, qty: 1 });
    }
  }

  removeFromCart(index: number): void {
    this.cartProducts.splice(index, 1);
  }

  increaseQuantity(index: number): void {
    this.cartProducts[index].qty++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartProducts[index].qty > 1) {
      this.cartProducts[index].qty--;
    }
  }

  printReceipt(): void {
    const printContents = document.getElementById('print-receipt')?.innerHTML;
    const originalContents = document.body.innerHTML;
  
    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      location.reload(); // Recharge la page pour restaurer l'état initial.
    }
  }

  getTransactionID(): number {
    const transactionID = localStorage.getItem('transactionID');
        return transactionID ? parseInt(transactionID, 10) : 1; // ID de départ
}
private saveTransactionID(transactionID: number): void {
  localStorage.setItem('transactionID', transactionID.toString());
}
private enregistrerTransaction(): number {
  this.transactionID++; // Incrémente l'ID
  this.saveTransactionID(this.transactionID); // Enregistre le nouvel ID
  console.log('Transaction ID:', this.transactionID);
  return this.transactionID; // Retourne le nouvel ID
}
generateBarcode(data: string, elementId: string) {
  const qrCodeReader = new BrowserQRCodeReader();

  qrCodeReader.decodeFromInputVideoDevice(undefined, elementId)
    .then((result) => {
      console.log('Code-barres généré :', result.getText());
    })
    .catch((error) => {
      console.error('Erreur lors de la génération du code-barres', error);
    });
}


// Appel de la fonction pour générer le code-barres


  public selectedValue1 = '';
  public selectedValue2 = '';

  public selectedValue6 = '';
  public selectedValue7 = '';
  public selectedValue8 = '';
  selectedList1: data[] = [
    { value: 'Walk in Customer' },
    { value: 'John' },
    { value: 'Smith' },
    { value: 'Ana' },
    { value: 'Elza' },
  ];
  selectedList2: data[] = [
    { value: 'Search Products' },
    { value: 'IPhone 14 64GB' },
    { value: 'MacBook Pro' },
    { value: 'Rolex Tribute V3' },
    { value: 'Red Nike Angelo' },
    { value: 'Airpod 2' },
    { value: 'Oldest' },
  ];
  selectedList3: data[] = [
    { value: 'GST 5%' },
    { value: 'GST 10%' },
    { value: 'GST 15%' },
    { value: 'GST 20%' },
    { value: 'GST 25%' },
    { value: 'GST 30%' },
    { value: 'GST 30%' },
  ];
  selectedList4: data[] = [
    { value: '15' },
    { value: '20' },
    { value: '25' },
    { value: '30' },
    
  ];
  selectedList5: data[] = [
    { value: '10%' },
    { value: '20%' },
    { value: '25%' },
    { value: '30%' },
    
  ];
  selectedList6: data[] = [
    { value: 'Kilogram' },
    { value: 'Grams' },
    
    
  ];
  selectedList7: data[] = [
    { value: 'Percentage' },
    { value: 'Early payment discounts' },
    { value: '25%' },
    { value: '30%' },
    
  ];
  selectedList8: data[] = [
    { value: 'Exclusive' },
    { value: 'Inclusive' },
  ];
  

  customOptions: OwlOptions = {
    margin: 10,
    dots: false,
    nav: true,
    rtl: true,
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>',
      
    ],
    loop: false,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  quantity: number = 4;
  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  public cartValue = [4,4];
  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }
  public routes = routes;
  // pagination variables
  public tableData: Array<pospurchase> = [];
  public tableData2: Array<pospurchase> = [];
  public tableData3: Array<pospurchase> = [];


  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<pospurchase>;
  public searchDataValue = '';
  //** / pagination variables

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router,
    private sidebar: SidebarService,
    private productService:ProdutService,
    private orderService :OrderService,
  ) {
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData2({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.pos) {
          this.getTableData3({ skip: res.skip, limit: this.totalData  });
          this.pageSize = res.pageSize;
        }
      });
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: pospurchase, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<pospurchase>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
  private getTableData2(pageOption: pageSelection): void {
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: pospurchase, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<pospurchase>(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData2,
        serialNumberArray: this.serialNumberArray,
        tableData: []
      });
    });
  }
  private getTableData3(pageOption: pageSelection): void {
    this.data.getPosPurchase().subscribe((apiRes: apiResultFormat) => {
      this.tableData3 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: pospurchase, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData3.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<pospurchase>(this.tableData2);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData2: this.tableData3,
        serialNumberArray: this.serialNumberArray,
        tableData: []
      });
    });
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
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
      title: 'Vous etes sure?',
      text: "De vouloir valider la commande",
      confirmButtonText: 'Oui, valider!',
      showCancelButton: true,
      cancelButtonText: 'anuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const orderData = {
          user:{"id":2},
          totalAmount:this.total,
          status:'Paid',
          orderDate: new Date(), // Date de commande
            items: this.cartProducts.map((product) => ({
              product : {"id":product.id},
              quantity: product.qty,
              price: product.price,
            })),
          };
    
          this.orderService.createOrder(orderData).subscribe(
            {
              next:(response)=>{
                console.log('commande creer avec succes',response),
                swalWithBootstrapButtons.fire(
                  'valider!',
                  'Votre commande a bien eté enregistre',
                  'success'
                ).then(()=>{
                  location.reload();
                })
                
    
              },error:(err)=>{
                console.log("error lors de la soumission de la commande",err),
                alert("erreur lors de la soummission de la commande")
    
              }
            }
          )
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
   ngOnInit(): void {
   window.dispatchEvent(new Event('resize'));
   this.allProduct();
   this.generateBarcode("this.transactionID.toString()",'barcode-container');
  }
}



new Vue ({
  el: '#app',
  data: {
    products: [
      {
        id: 'SbOe6Thcx6zT0Ugi6LiCxK40yF4E8rsBNO7HrV9T6RiP24BBfr4oOshoqn5nxeIX',
        title: 'Google Nest Mini 第二代',
        category: 'Sound',
        content: 'Nest Mini 外型依然迷你，但功能更為強大。',
        imageUrl: [
          'https://lh3.googleusercontent.com/s2gBhfazePorUjqF9lXRmUj8SZ7Ma-cTTGcvXe0DxpSSz1oyb4OsC3iL8wB-o0BaGQ=rw-w2288'
        ],
        enabled: 'true',
        origin_price: '1785',
        price: '1785',
        unit: 'Item'
      },
      {
        id: 'ENUleXirDpfDvnYKjnO30bgN1zd0Apb0nj6kdVlR7DogbUECZwkNItBM1ZMOjWLB',
        title: 'Google Pixel 3a',
        category: 'Phone',
        content: '實惠價格，盡享尊榮。',
        imageUrl: [
          'https://lh3.googleusercontent.com/5kOwagtvCOO_gVJVvXtB8GpGumWQZYKCkd9CQqwo8uqxeVIaHHzoDjcvuoG-cB9wFg=rw-w720'
        ],
        enabled: 'true',
        origin_price: '14500',
        price: '14500',
        unit: 'Item'
      },
      {
        id: 'YBNjS2wU76JNRsLddc15NN5X2LR9CR2BYfTtwDNsCOz6xCRYea1FzDy56PSUI7eV',
        title: 'Google Pixel 4',
        category: 'Phone',
        content: '不用透過攝影工作室，也能拍出媲美專業水準的相片。',
        imageUrl: [
          'https://lh3.googleusercontent.com/IdlM6knatGZSkayiP6PNpbzP0kfJfVsSkU-qOcioKHjIt8yi_Mvx9fPUj5KJ4RA87gc=rw-w720'
        ],
        enabled: 'true',
        origin_price: '24600',
        price: '24600',
        unit: 'Item'
      },
    ],
    tempProduct: {} // 避免直接更動到原始資料，先複製資料至 tempProduct，確認後再複製過去
  },
  methods: {
    updateProduct() {
      // edit
      if (this.tempProduct.id) { // 如果 tempProduct 有資料則執行以下
        const id = this.tempProduct.id; // 宣告 id = this.tempProduct.id
        this.products.forEach((item, i) => { // 用 forEach 去跑 products 的迴圈撈資料
          if (item.id === id) { // 如果資料裡的 item.id 等於 tempProduct 裡的資料 id
            this.products[i] = this.tempProduct; // 相同 id 的 products 賦予 tempProduct 相同的值
          }
        });
      // delet
      } else { // 如果 tempProduct 沒有資料則執行以下
        // Unix Timestamp
        const id = new Date().getTime(); // 宣告 id = new Date().getTime() -> 使用時間來作為 id 用s
        this.tempProduct.id = id; // tempProduct 
        this.products.push(this.tempProduct); // products 的資料 push 至 tempProduct
      }
      this.tempProduct = {};
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {}; // 把 { 資料 } 寫進去 tempProduct
          break;
        case 'edit':
          this.tempProduct = Object.assign({}, item); // 淺複製 tempProduct 至 item
          break;
        case 'delete':
          this.tempProduct = Object.assign({}, item); // 淺複製 tempProduct 至 item
          break;
        default:
          break;
      }
    },
    delProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
    },
  }
});
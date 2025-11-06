
export interface Category {
  id: string;
  name: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: Category['id'];
  tags?: string[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}
   
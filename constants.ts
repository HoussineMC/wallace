
import type { Category, MenuItem } from './types';

export const CATEGORIES: Category[] = [
  { id: 'combo', name: 'Combos' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'chicken', name: 'Fried Chicken' },
  { id: 'sides', name: 'Sides & Snacks' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'family', name: 'Family Meals' }
];

export const MENU_ITEMS: MenuItem[] = [
  // Combos
  {
    id: 1,
    name: 'Wilderness Buff Combo',
    description: 'Crispy chicken strips, crinkle-cut fries, and a special sauce.',
    price: 9.9,
    image: 'https://picsum.photos/seed/food1/400/400',
    categoryId: 'combo',
    tags: ['Best Seller']
  },
  {
    id: 2,
    name: 'Hearty Drink Set',
    description: 'Chicken nuggets with a refreshing iced tea.',
    price: 11.0,
    image: 'https://picsum.photos/seed/food2/400/400',
    categoryId: 'combo'
  },
  {
    id: 3,
    name: 'Flying Double Wing Meal',
    description: 'Two crispy chicken wings with a side of your choice.',
    price: 11.0,
    image: 'https://picsum.photos/seed/food3/400/400',
    categoryId: 'combo'
  },
  {
    id: 4,
    name: 'Ultimate Burger Combo',
    description: 'Our signature burger, large fries, and a large soda.',
    price: 14.5,
    image: 'https://picsum.photos/seed/food4/400/400',
    categoryId: 'combo',
    tags: ['New']
  },

  // Burgers
  {
    id: 5,
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty, cheddar cheese, pickles, onions, ketchup, and mustard.',
    price: 8.5,
    image: 'https://picsum.photos/seed/food5/400/400',
    categoryId: 'burgers'
  },
  {
    id: 6,
    name: 'Spicy Chicken Sandwich',
    description: 'Crispy chicken breast with a spicy kick, lettuce, and mayo.',
    price: 9.0,
    image: 'https://picsum.photos/seed/food6/400/400',
    categoryId: 'burgers'
  },
  
  // Chicken
  {
    id: 7,
    name: '3 Piece Crispy Chicken',
    description: 'Three pieces of our signature hand-breaded crispy chicken.',
    price: 7.8,
    image: 'https://picsum.photos/seed/food7/400/400',
    categoryId: 'chicken'
  },
  {
    id: 8,
    name: 'Chicken Bucket (9 pieces)',
    description: 'A feast for the whole family!',
    price: 22.5,
    image: 'https://picsum.photos/seed/food8/400/400',
    categoryId: 'chicken'
  },

  // Sides
  {
    id: 9,
    name: 'Crinkle-Cut Fries',
    description: 'Golden and crispy crinkle-cut fries.',
    price: 3.5,
    image: 'https://picsum.photos/seed/food9/400/400',
    categoryId: 'sides'
  },
  {
    id: 10,
    name: 'Onion Rings',
    description: 'Thick-cut onion rings, breaded and fried to perfection.',
    price: 4.0,
    image: 'https://picsum.photos/seed/food10/400/400',
    categoryId: 'sides'
  },

  // Drinks
  {
    id: 11,
    name: 'Iced Lemon Tea',
    description: 'Refreshing and sweet, perfect for a hot day.',
    price: 2.5,
    image: 'https://picsum.photos/seed/food11/400/400',
    categoryId: 'drinks'
  },
  {
    id: 12,
    name: 'Cola',
    description: 'Classic cola flavor.',
    price: 2.5,
    image: 'https://picsum.photos/seed/food12/400/400',
    categoryId: 'drinks'
  }
];
   
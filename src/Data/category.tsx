type CategoryId = 'all' | 'bike' | 'car' | 'truck' | 'gear' | 'specialized' | 'industrial';

interface Category {
  id: CategoryId;
  label: string;
  icon: string; // Changed from React.ReactNode to string
  iconActive : string ;
  width?: string;
  height?: string;
}

export const categories: Category[] =[
  {
    id: 'all',
    label: 'ALL',
    icon: "/category/all-removebg-preview.png",
    iconActive : "/category/all-red-removebg-preview.png",

    width: "w-14",
  },
  {
    id: 'bike',
    label: 'BIKE',
    icon: "/category/bike-removebg-preview.png",
    iconActive : "/category/all-bike-removebg-preview.png",
    width: "w-24" // Changed from w-25 to w-24
  },
  {
    id: 'car',
    label: 'CAR',
    icon: "/category/car-removebg-preview.png",
    iconActive : "/category/car-red-removebg-preview.png",
    width: "w-24" // Changed from w-25 to w-24
  },
  {
    id: 'truck',
    label: 'TRUCK & TRACTOR',
    icon: "/category/truck-removebg-preview.png",
    iconActive : "/category/truck-red-removebg-preview.png",
    width: "w-28" // Made slightly wider for the truck
  },
  {
    id: 'gear',
    label: 'GEAR & TRANSMISSION',
    icon: "/category/gear-removebg-preview.png",
    iconActive : "/category/gear-red-removebg-preview.png",
    width: "w-20"
  },
  {
    id: 'specialized',
    label: 'SPECIALIZED PRODUCTS',
    icon: "/category/special-removebg-preview.png",
    iconActive : "/category/special-red-removebg-preview.png",
    width: "w-16"
  },
];
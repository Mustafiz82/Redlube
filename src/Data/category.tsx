type CategoryId = 'ALL' | 'BIKE' | 'CAR' | 'CNG' | 'DIESEL' | 'specialized' | 'industrial';

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
    id: 'ALL',
    label: 'ALL',
    icon: "/category/all-red.png",
    iconActive : "/category/all-white.png",

    width: "w-10 lg:w-14",
  },
  {
    id: 'BIKE',
    label: 'BIKE ENGINE OIL',
    icon: "/category/bike-red.png",
    iconActive : "/category/bike-white.png",
    width: "w-16 lg:w-24" // Changed from w-25 to w-24
  },
  {
    id: 'CAR',
    label: 'CAR ENGINE OIL',
    icon: "/category/car-red.png",
    iconActive : "/category/car-white.png",
    width: "w-16 lg:w-24" // Changed from w-25 to w-24
  },
  {
    id: 'CNG',
    label: 'CNG ENGINE OIL',
    icon: "/category/cng-red.png",
    iconActive : "/category/cng-white.png",
    width: "w-16 lg:w-28" // Made slightly wider for the truck
  },
  {
    id: 'DIESEL',
    label: 'DIESEL ENGINE OIL',
    icon: "/category/diesel-red.png",
    iconActive : "/category/diesel-white.png",
    width: "w-12 lg:w-20"
  },
  // {
  //   id: 'specialized',
  //   label: 'SPECIALIZED PRODUCTS',
  //   icon: "/category/special-removebg-preview.png",
  //   iconActive : "/category/special-red-removebg-preview.png",
  //   width: "w-10 lg:w-16"
  // },
];

export type Accessory = {
  id: number;
  name: string;
  category: "batteries" | "care";
  price: number;
  image: string;
  brand: string;
  description: string;
  inStock: boolean;
};

export const accessories: Accessory[] = [
  {
    id: 101,
    name: "Батарейка для слухового аппарата Тип 10",
    category: "batteries",
    price: 300,
    image: "/lovable-uploads/dd9e9afc-1840-45a5-b02c-fffd8e56eb6d.png",
    brand: "audifon",
    description: "Высококачественные батарейки для слуховых аппаратов тип 10 (желтые)",
    inStock: true
  },
  {
    id: 102,
    name: "Батарейка для слухового аппарата Тип 13",
    category: "batteries",
    price: 75,
    image: "/lovable-uploads/c888a1e7-275f-4104-b6e9-a06817988e7e.png",
    brand: "audifon",
    description: "Высококачественные батарейки для слуховых аппаратов тип 13 (оранжевые)",
    inStock: true
  },
  {
    id: 103,
    name: "Батарейка для слуховых аппаратов Тип 312",
    category: "batteries",
    price: 75,
    image: "/lovable-uploads/43b812ea-e3bb-4636-968c-558304ee622e.png",
    brand: "audifon",
    description: "Высококачественные батарейки для слуховых аппаратов тип 312 (коричневые)",
    inStock: true
  },
  {
    id: 106,
    name: "Тестер для батареек",
    category: "batteries",
    price: 1300,
    image: "/lovable-uploads/7f807c40-77a9-4ad5-b69b-cd5f2ade44e1.png",
    brand: "",
    description: "Цифровой тестер для проверки заряда батареек слуховых аппаратов",
    inStock: true
  },
  {
    id: 104,
    name: "Контейнер для сушки ушных вкладышей слухового аппарата",
    category: "care",
    price: 2200,
    image: "/lovable-uploads/0eaa30fb-1dfa-469a-a08d-e783f9b4d2e5.png",
    brand: "AURICA",
    description: "Специальный контейнер для безопасной сушки и хранения ушных вкладышей слуховых аппаратов",
    inStock: true
  },
  {
    id: 105,
    name: "Защитные фильтры ProWax miniFit",
    category: "care",
    price: 950,
    image: "/lovable-uploads/80fbcca6-d1fb-4b05-bf5f-0095e5fbc00f.png",
    brand: "Oticon",
    description: "Защитные фильтры ProWax miniFit для защиты от серы и влаги внутриушных слуховых аппаратов",
    inStock: true
  }
];

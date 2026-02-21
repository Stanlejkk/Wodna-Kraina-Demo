export interface Spot {
  id: string;
  name: string;
  lakeId: string;
  type: "stanowisko" | "domek-maly" | "domek-duzy" | "domek-vip";
  pricePerDay: number;
  description: string;
}

export const spots: Spot[] = [
  // Akwen Główny
  { id: "ag-s1", name: "Stanowisko 1", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s2", name: "Stanowisko 2", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s3", name: "Stanowisko 3", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s4", name: "Stanowisko 4", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s5", name: "Stanowisko 5", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s6", name: "Stanowisko 6", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s7", name: "Stanowisko 7", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-s8", name: "Stanowisko 8", lakeId: "akwen-glowny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "ag-dm1", name: "Domek Mały 1", lakeId: "akwen-glowny", type: "domek-maly", pricePerDay: 150, description: "Domek mały, 2-3 osoby" },
  { id: "ag-dm2", name: "Domek Mały 2", lakeId: "akwen-glowny", type: "domek-maly", pricePerDay: 150, description: "Domek mały, 2-3 osoby" },
  { id: "ag-dd1", name: "Domek Duży 1", lakeId: "akwen-glowny", type: "domek-duzy", pricePerDay: 300, description: "Domek duży z poddaszem, 4-6 osób" },
  { id: "ag-vip", name: "Domek VIP", lakeId: "akwen-glowny", type: "domek-vip", pricePerDay: 400, description: "Domek VIP, pełne wyposażenie" },

  // Akwen Leśny
  { id: "al-s1", name: "Stanowisko 1", lakeId: "akwen-lesny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "al-s2", name: "Stanowisko 2", lakeId: "akwen-lesny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "al-s3", name: "Stanowisko 3", lakeId: "akwen-lesny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "al-s4", name: "Stanowisko 4", lakeId: "akwen-lesny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "al-s5", name: "Stanowisko 5", lakeId: "akwen-lesny", type: "stanowisko", pricePerDay: 100, description: "Stanowisko karpiowe, 3 wędki" },
  { id: "al-dm1", name: "Domek Mały 1", lakeId: "akwen-lesny", type: "domek-maly", pricePerDay: 150, description: "Domek mały, 2-3 osoby" },

  // Drapieżniki
  { id: "dr-s1", name: "Stanowisko 1", lakeId: "drapiezniki", type: "stanowisko", pricePerDay: 120, description: "Stanowisko drapieżne" },
  { id: "dr-s2", name: "Stanowisko 2", lakeId: "drapiezniki", type: "stanowisko", pricePerDay: 120, description: "Stanowisko drapieżne" },
  { id: "dr-s3", name: "Stanowisko 3", lakeId: "drapiezniki", type: "stanowisko", pricePerDay: 120, description: "Stanowisko drapieżne" },
  { id: "dr-s4", name: "Stanowisko 4", lakeId: "drapiezniki", type: "stanowisko", pricePerDay: 120, description: "Stanowisko drapieżne" },
];

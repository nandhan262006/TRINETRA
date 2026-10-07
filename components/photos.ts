export type PhotoCategory = "maternity" | "newborn" | "wedding" | "portraits";

export type Photo = {
  src: string;
  title: string;
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
};

export const CATEGORIES: { id: PhotoCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "maternity", label: "Maternity" },
  { id: "newborn", label: "Newborn" },
  { id: "wedding", label: "Wedding" },
  { id: "portraits", label: "Portraits" },
];

export const PHOTOS: Photo[] = [
  { src: "/hero-maternity.webp", title: "Mama Glow", alt: "Maternity portrait in red saree holding a pot", category: "maternity", width: 906, height: 1280 },
  { src: "/0a50f1c3-02c2-46c1-80fe-014ab03503e6.webp", title: "Festive Muse", alt: "Portrait in pink and green traditional wear", category: "portraits", width: 899, height: 1280 },
  { src: "/0ca4084d-9bd3-4537-b135-a6d05844fae8.webp", title: "Silhouette Bump", alt: "Black and white maternity silhouette", category: "maternity", width: 1060, height: 1484 },
  { src: "/285c37f6-3564-41b6-b4ed-88b13926f061.webp", title: "Tiny Toes", alt: "Newborn baby wrapped in pink with tulips", category: "newborn", width: 1280, height: 854 },
  { src: "/3629146f-ad39-4ef4-905b-33e02f3cd866.webp", title: "Earth Mama", alt: "Maternity portrait in a field at golden hour", category: "maternity", width: 853, height: 1280 },
  { src: "/3ae72689-e1f6-4863-8a39-5decdad47e2f.webp", title: "Sky Lehenga", alt: "Portrait in light blue lehenga outdoors", category: "portraits", width: 960, height: 1280 },
  { src: "/474af460-248d-480d-8135-397ad71ce064.webp", title: "Crimson Queen", alt: "Maternity portrait in red gown on red backdrop", category: "maternity", width: 854, height: 1280 },
  { src: "/477b617e-882a-421b-83fc-39a621284892.webp", title: "The Grand Entry", alt: "Bride walking toward a wedding mandap", category: "wedding", width: 1280, height: 589 },
  { src: "/58c982d6-8281-4de6-b303-3e7e0d7dca49.webp", title: "Seated Serenity", alt: "Seated maternity portrait in blue saree", category: "maternity", width: 1121, height: 1403 },
  { src: "/60090bfa-2ec0-4f3b-afaf-eac07d98d4f4.webp", title: "Henna Hands", alt: "Mehndi hands detail on blue lehenga", category: "wedding", width: 1280, height: 767 },
  { src: "/60296081-7b2a-4a68-be75-b018704c595b.webp", title: "City Love", alt: "Couple portrait in the city", category: "wedding", width: 687, height: 850 },
  { src: "/68ca6d28-d4ac-4ccc-a31f-1fa712c8dbf7.webp", title: "Royal Seat", alt: "Seated maternity portrait in pink and navy", category: "maternity", width: 1024, height: 1280 },
  { src: "/68f9e3cb-7676-41a0-a88c-550a0b3b518b.webp", title: "Hatchling", alt: "Newborn curled in an eggshell prop", category: "newborn", width: 1277, height: 1232 },
  { src: "/692255a1-8ac2-4af1-b6a7-ae0f766be680.webp", title: "Pink & Poised", alt: "Maternity portrait in pink saree holding a fruit plate", category: "maternity", width: 1068, height: 1600 },
  { src: "/6b0a8219-a5f1-4710-bdef-fb715be37f54.webp", title: "Sky Muse", alt: "Portrait in light blue lehenga", category: "portraits", width: 1024, height: 1280 },
  { src: "/6f9c1ecc-b1e4-4c1d-81c3-cbd2b42237ed.webp", title: "Wash Day", alt: "Childhood portrait at a laundry shoot", category: "portraits", width: 1121, height: 1403 },
  { src: "/7d98606e-a616-4dd8-a7a6-a95c7fcc7bf9.webp", title: "Henna Portrait", alt: "Framed bridal portrait showing mehndi", category: "wedding", width: 1024, height: 1280 },
  { src: "/867e6d31-f089-44d8-8a1b-4f2bbaea4fd5.webp", title: "Bloom Detail", alt: "Jewellery and floral detail close-up", category: "portraits", width: 1280, height: 672 },
  { src: "/8ee5db12-96b9-4598-8d46-d2bef79450bc.webp", title: "Bloom Close", alt: "Necklace and floral close-up", category: "portraits", width: 1280, height: 945 },
  { src: "/8ff2291c-720b-4c3b-97bb-a580cf73cf11.webp", title: "Duet", alt: "Couple in pink traditional wear", category: "wedding", width: 1068, height: 1600 },
  { src: "/9e3b6b55-95e8-4066-bd0b-4032863a8f49.webp", title: "Maroon Hour", alt: "Couple portrait against red curtains", category: "wedding", width: 1029, height: 1528 },
  { src: "/a0adc7c8-eab1-4425-8c0c-7594494adbf6.webp", title: "Pampas Dream", alt: "Portrait in blue among pampas grass", category: "portraits", width: 1600, height: 898 },
  { src: "/a5344c2f-2c51-4e2d-a379-c0ed94414d42.webp", title: "Moon Bump", alt: "Maternity portrait in orange gown before the moon", category: "maternity", width: 1024, height: 1536 },
  { src: "/aaefb11a-be42-40f9-b07a-7eaef74ba15c.webp", title: "Two-Tone Mama", alt: "Maternity portrait in pink and navy saree", category: "maternity", width: 876, height: 1280 },
  { src: "/b6af6cb7-2ae1-48b9-b7d6-b8732ddfbf61.webp", title: "Pumpkin Season", alt: "Newborn asleep inside a pumpkin prop", category: "newborn", width: 1254, height: 1254 },
  { src: "/c1e99bef-ddc4-406f-b31b-8f579373f1d7.webp", title: "First Steps", alt: "Parents holding baby shoes", category: "newborn", width: 967, height: 1161 },
  { src: "/c582ee81-2227-4607-b2e9-8a4b44b8233b.webp", title: "Pot of Joy", alt: "Portrait holding a decorated pot", category: "portraits", width: 720, height: 1280 },
  { src: "/d5c0e723-e77d-43bc-86dd-c9c5df674748.webp", title: "Swing Muse", alt: "Portrait in purple saree on a flower swing", category: "portraits", width: 1099, height: 1431 },
  { src: "/de8e3f0a-b795-43e4-83f5-3e210b56113f.webp", title: "Cradle Cutie", alt: "Newborn on a hanging bed prop", category: "newborn", width: 1206, height: 793 },
  { src: "/fc24dd55-2d89-4add-b54d-8c49da5f18aa.webp", title: "Red Reverie", alt: "Maternity portrait in red saree by the river", category: "maternity", width: 956, height: 1600 },
];

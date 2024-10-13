// useMapData.ts
import { useState, useEffect } from "react";
import { getObjects, getCategories } from "../services/mapServices";
import { Category, ObjectItem } from "@/utils/types";

function useMapData() {
  const [objects, setObjects] = useState<ObjectItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const objectsResponse = await getObjects();
      const categoriesResponse = await getCategories();
      const objectsData = objectsResponse.record.objects;
      const categoriesData = categoriesResponse.record.categories; // Access categories

      objectsData.forEach((obj) => {
        obj.categoryName = categoriesData.find(
          (cat) => cat.id === obj.categoryId
        )?.name;
      });
      setObjects(objectsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { objects, categories, refetchData: fetchData };
}

export default useMapData;

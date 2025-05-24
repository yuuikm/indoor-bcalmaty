export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: "v1", objectName: null, cx: 247.9, cy: 558.6 },
    { id: "v2", objectName: "Лифт №1 7 этаж", cx: 270.3, cy: 558.3 },
    { id: "v3", objectName: null, cx: 247.9, cy: 503.9 },
    { id: "v4", objectName: null, cx: 177.9, cy: 503.9 },
    { id: "v5", objectName: "Арендатор 700", cx: 177.9, cy: 519 },
    { id: "v6", objectName: null, cx: 164.7, cy: 503.9 },
    { id: "v7", objectName: null, cx: 428.4, cy: 503.9 },
    { id: "v8", objectName: "Арендатор 702", cx: 428.4, cy: 487 },
    { id: "v9", objectName: null, cx: 428.4, cy: 582.2 },
    { id: "v10", objectName: "Туалет №1 7 этаж", cx: 374.9, cy: 582.2 },
    { id: "v11", objectName: null, cx: 428.4, cy: 561.4 },
    { id: "v12", objectName: null, cx: 529.6, cy: 561.4 },
    { id: "v13", objectName: "Sharipov", cx: 529.6, cy: 602 },
    { id: "v14", objectName: "Арендатор 704", cx: 529.6, cy: 517.7 },
    { id: "v15", objectName: null, cx: 855.8, cy: 561.4 },
    { id: "v16", objectName: null, cx: 855.7, cy: 672.5 },
    { id: "v17", objectName: null, cx: 866.3, cy: 672.5 },
    { id: "v18", objectName: null, cx: 920.1, cy: 672.5 },
    { id: "v19", objectName: "Лифт №2 7 этаж", cx: 920.1, cy: 651.5 },
    { id: "v20", objectName: "MehKaz ТОО", cx: 866.3, cy: 693.4 },
    { id: "v21", objectName: null, cx: 855.7, cy: 531.5 },
    { id: "v22", objectName: "ANILMANTRA-KZ (Анилмантра-кз), Legal Point&HR Advisory", cx: 855.8, cy: 517.7 },
    { id: "v23", objectName: null, cx: 939, cy: 531.5 },
    { id: "v24", objectName: "Туалет №2 7 этаж", cx: 939, cy: 545.8 },
    { id: "v25", objectName: null, cx: 1072.1, cy: 531.5 },
    { id: "v26", objectName: "Арендатор 708", cx: 1072.1, cy: 517.7 },
    { id: "v27", objectName: "Арендатор 707", cx: 1072.1, cy: 602 },
    { id: "v28", objectName: "Garant Ipoteki", cx: 164.8, cy: 487 },
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v3", from: "v1", to: "v3" },
    { id: "v3_to_v4", from: "v3", to: "v4" },
    { id: "v4_to_v6", from: "v4", to: "v6" },
    { id: "v4_to_v5", from: "v4", to: "v5" },
    { id: "v6_to_v28", from: "v6", to: "v28" },
    { id: "v3_to_v7", from: "v3", to: "v7" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v7_to_v11", from: "v7", to: "v11" },
    { id: "v11_to_v9", from: "v11", to: "v9" },
    { id: "v9_to_v10", from: "v9", to: "v10" },
    { id: "v11_to_v12", from: "v11", to: "v12" },
    { id: "v12_to_v13", from: "v12", to: "v13" },
    { id: "v12_to_v14", from: "v12", to: "v14" },
    { id: "v12_to_v15", from: "v12", to: "v15" },
    { id: "v15_to_v16", from: "v15", to: "v16" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v17_to_v20", from: "v17", to: "v20" },
    { id: "v17_to_v18", from: "v17", to: "v18" },
    { id: "v18_to_v19", from: "v18", to: "v19" },
    { id: "v15_to_v21", from: "v15", to: "v21" },
    { id: "v21_to_v22", from: "v21", to: "v22" },
    { id: "v21_to_v23", from: "v21", to: "v23" },
    { id: "v23_to_v24", from: "v23", to: "v24" },
    { id: "v23_to_v25", from: "v23", to: "v25" },
    { id: "v25_to_v26", from: "v25", to: "v26" },
    { id: "v25_to_v27", from: "v25", to: "v27" },
  ],
};

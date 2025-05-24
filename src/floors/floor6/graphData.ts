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
    { id: "v1", objectName: "Арендатор 013", cx: 771.32, cy: 575.5 },
    { id: "v2", objectName: "Арендатор 016", cx: 693.53, cy: 610.48 },
    { id: "v3", objectName: "Арендатор 015", cx: 693.53, cy: 576.09 },
    { id: "v4", objectName: "Арендатор 020", cx: 521.86, cy: 610.48 },
    { id: "v5", objectName: "Арендатор 017", cx: 521.86, cy: 576.09 },
    { id: "v6", objectName: "Арендатор open-space-2/2", cx: 443.64, cy: 610.48 },
    { id: "v7", objectName: "Арендатор open-space-2/1", cx: 443.64, cy: 576.09 },
    { id: "v8", objectName: "Туалет №2 цоколь", cx: 633.2, cy: 576.09 },
    { id: "v9", objectName: "Арендатор 018", cx: 610.07, cy: 610.48 },
    { id: "v10", objectName: "Арендатор 014", cx: 771.32, cy: 610.48 },
    { id: "v11", objectName: "Арендатор 002", cx: 924.48, cy: 610.48 },
    { id: "v12", objectName: "Техническое помещение", cx: 944.39, cy: 575.5 },
    { id: "v13", objectName: "Арендатор 005", cx: 1001.48, cy: 575.5 },
    { id: "v14", objectName: "Арендатор 004", cx: 1001.48, cy: 610.48 },
    { id: "v15", objectName: "Туалет №1 цоколь", cx: 1062.13, cy: 575.5 },
    { id: "v16", objectName: "Арендатор 006", cx: 1079.15, cy: 610.48 },
    { id: "v17", objectName: "Арендатор 007", cx: 1171.9, cy: 575.5 },
    { id: "v18", objectName: "Арендатор 008", cx: 1171.9, cy: 610.48 },
    { id: "v19", objectName: "Арендатор 009", cx: 1250.28, cy: 575.5 },
    { id: "v20", objectName: "Арендатор 010", cx: 1250.28, cy: 610.48 },
    { id: "v21", objectName: "Арендатор 012", cx: 1323.83, cy: 610.48 },
    { id: "v22", objectName: "Лифт цоколь", cx: 1371.39, cy: 575.5 },
    { id: "v23", objectName: "Арендатор 001", cx: 847.91, cy: 610.48 },
    { id: "v24", objectName: "Арендатор open-space-1", cx: 252.28, cy: 592.99 },
    { id: "v25", objectName: "Арендатор 011", cx: 1323.83, cy: 575.5 },
    { id: "v26", objectName: null, cx: 1371.39, cy: 592.99 },
    { id: "v27", objectName: null, cx: 1323.83, cy: 592.99 },
    { id: "v28", objectName: null, cx: 1250.28, cy: 592.99 },
    { id: "v29", objectName: null, cx: 1171.9, cy: 592.99 },
    { id: "v30", objectName: null, cx: 1079.15, cy: 592.99 },
    { id: "v31", objectName: null, cx: 1062.13, cy: 592.99 },
    { id: "v32", objectName: null, cx: 1001.48, cy: 592.99 },
    { id: "v33", objectName: null, cx: 944.39, cy: 592.99 },
    { id: "v34", objectName: null, cx: 924.48, cy: 592.99 },
    { id: "v35", objectName: null, cx: 329.47, cy: 592.99 },
    { id: "v36", objectName: null, cx: 443.64, cy: 592.99 },
    { id: "v37", objectName: null, cx: 521.86, cy: 592.99 },
    { id: "v38", objectName: null, cx: 610.07, cy: 592.99 },
    { id: "v39", objectName: null, cx: 633.2, cy: 592.99 },
    { id: "v40", objectName: null, cx: 693.53, cy: 592.99 },
    { id: "v41", objectName: null, cx: 771.32, cy: 592.99 },
    { id: "v42", objectName: null, cx: 847.91, cy: 592.99 },
  ],

  edges: [
    { id: "v42_to_23", from: "v42", to: "v23" },
    { id: "v42_to_v41", from: "v42", to: "v41" },
    { id: "v41_to_v10", from: "v41", to: "v10" },
    { id: "v41_to_v1", from: "v41", to: "v1" },
    { id: "v41_to_v40", from: "v41", to: "v40" },
    { id: "v40_to_v2", from: "v40", to: "v2" },
    { id: "v40_to_v3", from: "v40", to: "v3" },
    { id: "v40_to_v39", from: "v40", to: "v39" },
    { id: "v39_to_v8", from: "v39", to: "v8" },
    { id: "v39_to_v38", from: "v39", to: "v38" },
    { id: "v38_to_v9", from: "v38", to: "v9" },
    { id: "v38_to_v37", from: "v38", to: "v37" },
    { id: "v37_to_v4", from: "v37", to: "v4" },
    { id: "v37_to_v5", from: "v37", to: "v5" },
    { id: "v37_to_v36", from: "v37", to: "v36" },
    { id: "v36_to_v6", from: "v36", to: "v6" },
    { id: "v36_to_v7", from: "v36", to: "v7" },
    { id: "v36_to_v35", from: "v36", to: "v35" },
    { id: "v35_to_v24", from: "v35", to: "v24" },
    { id: "v42_to_v34", from: "v42", to: "v34" },
    { id: "v34_to_v11", from: "v34", to: "v11" },
    { id: "v34_to_v33", from: "v34", to: "v33" },
    { id: "v33_to_v12", from: "v33", to: "v12" },
    { id: "v33_to_v32", from: "v33", to: "v32" },
    { id: "v32_to_v13", from: "v32", to: "v13" },
    { id: "v32_to_v14", from: "v32", to: "v14" },
    { id: "v32_to_v31", from: "v32", to: "v31" },
    { id: "v31_to_v15", from: "v31", to: "v15" },
    { id: "v31_to_v30", from: "v31", to: "v30" },
    { id: "v30_to_v16", from: "v30", to: "v16" },
    { id: "v30_to_v29", from: "v30", to: "v29" },
    { id: "v29_to_v17", from: "v29", to: "v17" },
    { id: "v29_to_v18", from: "v29", to: "v18" },
    { id: "v29_to_v28", from: "v29", to: "v28" },
    { id: "v28_to_v19", from: "v28", to: "v19" },
    { id: "v28_to_v20", from: "v28", to: "v20" },
    { id: "v28_to_v27", from: "v28", to: "v27" },
    { id: "v27_to_v21", from: "v27", to: "v21" },
    { id: "v27_to_v25", from: "v27", to: "v25" },
    { id: "v27_to_v26", from: "v27", to: "v26" },
    { id: "v26_to_v22", from: "v26", to: "v22" },
  ],
};

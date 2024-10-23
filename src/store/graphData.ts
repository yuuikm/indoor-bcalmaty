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
    { id: "v1", objectName: null, cx: 482.1, cy: 561 },
    { id: "v2", objectName: "Лифт 1", cx: 506.8, cy: 561 },
    { id: "v3", objectName: "Охрана", cx: 384.2, cy: 607.4 },
    { id: "v4", objectName: "Тамбур", cx: 291.9, cy: 656.5 },
    { id: "v5", objectName: null, cx: 436.7, cy: 560.6 },
    { id: "v6", objectName: null, cx: 384.2, cy: 561 },
    { id: "v7", objectName: null, cx: 325.1, cy: 561 },
    { id: "v8", objectName: null, cx: 325.1, cy: 656.5 },
    { id: "v9", objectName: null, cx: 325.1, cy: 676.3 },
    { id: "v10", objectName: null, cx: 437.2, cy: 676.3 },
    { id: "v11", objectName: "Арендатор 116", cx: 437.2, cy: 690 },
    { id: "v12", objectName: null, cx: 630.3, cy: 676.3 },
    { id: "v13", objectName: "Арендатор 115", cx: 630.3, cy: 690 },
    { id: "v14", objectName: null, cx: 661.9, cy: 676.3 },
    { id: "v15", objectName: "Арендатор 106", cx: 661.9, cy: 661.7 },
    { id: "v16", objectName: null, cx: 384.2, cy: 434.7 },
    { id: "v17", objectName: "Арендатор 100", cx: 384.2, cy: 420 },
    { id: "v18", objectName: null, cx: 506.1, cy: 434.7 },
    { id: "v19", objectName: "Арендатор 101", cx: 506.1, cy: 449.4 },
    { id: "v20", objectName: null, cx: 533, cy: 434.7 },
    { id: "v21", objectName: "Арендатор 102", cx: 533, cy: 420 },
    { id: "v22", objectName: null, cx: 630.3, cy: 434.7 },
    { id: "v23", objectName: null, cx: 630.3, cy: 468.2 },
    { id: "v24", objectName: "Арендатор 103", cx: 611.4, cy: 468.2 },
    { id: "v25", objectName: null, cx: 630.3, cy: 506.2 },
    { id: "v26", objectName: "Арендатор 104", cx: 611.4, cy: 506.2 },
    { id: "v27", objectName: null, cx: 630.3, cy: 539.6 },
    { id: "v28", objectName: null, cx: 630.3, cy: 583.8 },
    { id: "v29", objectName: "Туалет 1", cx: 611.9, cy: 583.8 },
    { id: "v30", objectName: null, cx: 665.8, cy: 539.6 },
    { id: "v31", objectName: "Арендатор 105", cx: 665.8, cy: 556.2 },
    { id: "v32", objectName: null, cx: 880.7, cy: 539.6 },
    { id: "v33", objectName: "Арендатор 107", cx: 880.7, cy: 526.8 },
    { id: "v34", objectName: null, cx: 1070.5, cy: 539.6 },
    { id: "v35", objectName: "Арендатор 108", cx: 1070.5, cy: 527.7 },
    { id: "v36", objectName: null, cx: 692.7, cy: 676.3 },
    { id: "v37", objectName: null, cx: 692.7, cy: 712.2 },
    { id: "v38", objectName: "Арендатор 113", cx: 788.5, cy: 698.5 },
    { id: "v39", objectName: null, cx: 891.2, cy: 712.2 },
    { id: "v40", objectName: "Арендатор 114", cx: 891.2, cy: 728 },
    { id: "v41", objectName: null, cx: 976.4, cy: 712.2 },
    { id: "v42", objectName: "Арендатор 111", cx: 976.4, cy: 698.5 },
    { id: "v43", objectName: null, cx: 1049.8, cy: 712.2 },
    { id: "v44", objectName: "Арендатор 109", cx: 1049.8, cy: 698.5 },
    { id: "v45", objectName: null, cx: 1066.5, cy: 712.2 },
    { id: "v46", objectName: "Арендатор 112", cx: 1066.5, cy: 728 },
    { id: "v47", objectName: null, cx: 1101.3, cy: 712.2 },
    { id: "v48", objectName: "Арендатор 110", cx: 1148, cy: 728 },
    { id: "v49", objectName: null, cx: 1168.9, cy: 712.2 },
    { id: "v50", objectName: "Лифт 2", cx: 1169.1, cy: 652.3 },
    { id: "v51", objectName: null, cx: 1101.3, cy: 539.6 },
    { id: "v52", objectName: null, cx: 1169.7, cy: 539.6 },
    { id: "v54", objectName: "Туалет 2", cx: 1169.7, cy: 546.7 },
    { id: "v53", objectName: null, cx: 788.5, cy: 712.2 },
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v1_to_v5", from: "v1", to: "v5" },
    { id: "v5_to_v10", from: "v5", to: "v10" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    { id: "v6_to_v7", from: "v6", to: "v7" },
    { id: "v6_to_v16", from: "v6", to: "v16" },
    { id: "v6_to_v3", from: "v6", to: "v3" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v8_to_v9", from: "v8", to: "v9" },
    { id: "v8_to_v4", from: "v8", to: "v4" },
    { id: "v9_to_v10", from: "v9", to: "v10" },
    { id: "v10_to_v11", from: "v10", to: "v11" },
    { id: "v10_to_v12", from: "v10", to: "v12" },
    { id: "v12_to_v13", from: "v12", to: "v13" },
    { id: "v12_to_v14", from: "v12", to: "v14" },
    { id: "v14_to_v15", from: "v14", to: "v15" },
    { id: "v14_to_v36", from: "v14", to: "v36" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v16_to_v18", from: "v16", to: "v18" },
    { id: "v18_to_v19", from: "v18", to: "v19" },
    { id: "v18_to_v20", from: "v18", to: "v20" },
    { id: "v20_to_v21", from: "v20", to: "v21" },
    { id: "v20_to_v22", from: "v20", to: "v22" },
    { id: "v22_to_v23", from: "v22", to: "v23" },
    { id: "v23_to_v24", from: "v23", to: "v24" },
    { id: "v23_to_v25", from: "v23", to: "v25" },
    { id: "v25_to_v26", from: "v25", to: "v26" },
    { id: "v25_to_v27", from: "v25", to: "v27" },
    { id: "v27_to_v30", from: "v27", to: "v30" },
    { id: "v27_to_v28", from: "v27", to: "v28" },
    { id: "v28_to_v29", from: "v28", to: "v29" },
    { id: "v28_to_v12", from: "v28", to: "v12" },
    { id: "v30_to_v31", from: "v30", to: "v31" },
    { id: "v30_to_v32", from: "v30", to: "v32" },
    { id: "v32_to_v33", from: "v32", to: "v33" },
    { id: "v32_to_v34", from: "v32", to: "v34" },
    { id: "v34_to_v35", from: "v34", to: "v35" },
    { id: "v14_to_v36", from: "v15", to: "v16" },
    { id: "v36_to_v37", from: "v36", to: "v37" },
    { id: "v37_to_v53", from: "v37", to: "v53" },
    { id: "v53_to_v38", from: "v53", to: "v38" },
    { id: "v53_to_v39", from: "v53", to: "v39" },
    { id: "v39_to_v40", from: "v39", to: "v40" },
    { id: "v39_to_v41", from: "v39", to: "v41" },
    { id: "v41_to_v42", from: "v41", to: "v42" },
    { id: "v41_to_v43", from: "v41", to: "v43" },
    { id: "v43_to_v44", from: "v43", to: "v44" },
    { id: "v43_to_v45", from: "v43", to: "v45" },
    { id: "v45_to_v46", from: "v45", to: "v46" },
    { id: "v45_to_v47", from: "v45", to: "v47" },
    { id: "v47_to_v49", from: "v47", to: "v49" },
    { id: "v47_to_v51", from: "v47", to: "v51" },
    { id: "v49_to_v48", from: "v49", to: "v48" },
    { id: "v49_to_v50", from: "v49", to: "v50" },
    { id: "v51_to_v52", from: "v51", to: "v52" },
    { id: "v52_to_v54", from: "v52", to: "v54" },
  ],
};

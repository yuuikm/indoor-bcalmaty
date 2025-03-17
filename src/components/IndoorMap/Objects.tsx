interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
        id="BM Development Group"
        className={`${className} object`}
        d="M419.7 419.3v-68.8H313V420h106.7v-.7z"
        onClick={handleObjectClick}
      />
      <path
        id="Омаров Данияр Камирдинович"
        className={`${className} object`}
        d="M550.3 520.4v-71H456v71H550.3z"
        onClick={handleObjectClick}
      />
      <path
        id="Ломбард «Золотое Руно»"
        className={`${className} object`}
        d="M419.7 350.5V420h221.4V248.7H347.2v101.7h72.4Z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 103"
        className={`${className} object`}
        d="M550.3 492h61.1v-42.6h-61.1V492z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 104"
        className={`${className} object`}
        d="M565.8 520.4h45.6V492h-61.1v28.4h15.5z"
        onClick={handleObjectClick}
      />
      <path
        id="APPAQ"
        className={`${className} object`}
        d="M733.2 608.5v-52.3h-87.4v52.3h87.4z"
        onClick={handleObjectClick}
      />
      <path
        id="ГАЗАРОВА"
        className={`${className} object`}
        d="M733.2 661.7v-52.3h-87.4v52.3h87.4z"
        onClick={handleObjectClick}
      />
      <path
        id="One stop Servise «Бір Қадам»"
        className={`${className} object`}
        d="M732.9 248.7v278.1h278.3V248.7H732.9z"
        onClick={handleObjectClick}
      />
      <path
        id="Success Together"
        className={`${className} object`}
        d="M1121.3 517.2h101.4V248.7h-211.5v278.1h110.1v-9.6z"
        onClick={handleObjectClick}
      />
      <path
        id="ALLIGATOR SCM"
        className={`${className} object`}
        d="M1086.1 698.5V556.2h-74.8v142.3h74.8z"
        onClick={handleObjectClick}
      />
      <path
        id="TOBE"
        className={`${className} object`}
        d="M1120.8 728v173.1h101.9V728h-101.9z"
        onClick={handleObjectClick}
      />
      <path
        id="South Brothers (Сауз Бразерс)"
        className={`${className} object`}
        d="M1011.3 698.5V556.2h-77.4v142.3h77.4z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 112"
        className={`${className} object`}
        d="M933.3 728v173.1h187.5V728H933.3z"
        onClick={handleObjectClick}
      />
      <path
        id="KASSEN GROUP"
        className={`${className} object`}
        d="M933.9 698.5V556.2H733.2v142.3h200.7z"
        onClick={handleObjectClick}
      />
      <path
        id="ЛИНИЯ СИСТЕМА ВИДЕОНАБЛЮДЕНИЯ"
        className={`${className} object`}
        d="M733 728v173.1h200.3V728H733z"
        onClick={handleObjectClick}
      />
      <path
        id="KazTransMet"
        className={`${className} object`}
        d="M465.1 689.6v210.9h181.3V689.6H465.1z"
        onClick={handleObjectClick}
      />
      <path
        id="Администрация"
        className={`${className} object`}
        d="M465.1 689.6H347v39.6h-83.2v75.7h48.3v95.6h153V689.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Охрана"
        className={`${className} object`}
        d="M411.6 657.9v-50.5h-54.7v51.1h54.7v-.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Тамбур"
        className={`${className} object`}
        d="M291.9 700.1v-89h-52V701h52v-.9z"
        onClick={handleObjectClick}
      />
      <path
        id="Туалет №1 1 этаж"
        className={`${className} object`}
        d="M611.4 647.2V520.4h-45.6v126.8h45.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Лифт №1 1 этаж"
        className={`${className} object`}
        d="M569.5 598.5v-78.1h-62.7v78.1h62.7z"
        onClick={handleObjectClick}
      />
      <path
        id="Лифт №1 1 этаж"
        className={`${className} object`}
        d="M1116.8 652.3h105.9v-47.4h-105.9v47.4z"
        onClick={handleObjectClick}
      />
      <path
        id="Туалет №2 1 этаж"
        className={`${className} object`}
        d="M1116.8 604.9h105.9v-58.2h-105.9v58.2z"
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;

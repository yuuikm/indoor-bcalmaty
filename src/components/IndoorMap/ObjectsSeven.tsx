interface ObjectsSevenProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function ObjectsSeven({ handleObjectClick, className }: ObjectsSevenProps) {
  return (
    <g id="Objects">
      <path
        id="Лифт №2 7 этаж"
        className={`${className} object`}
        d="M865.5 651.5h105.9v-47.4H865.5v47.4z"
        onClick={handleObjectClick}
      />
      <path
        id="Лифт №1 7 этаж"
        className={`${className} object`}
        d="M333 597.6v-78.1h-62.7v78.1H333z"
        onClick={handleObjectClick}
      />
      <path
        id="Туалет №2 7 этаж"
        className={`${className} object`}
        d="M865.5 604.1h154.9v-58.3H865.5v58.3z"
        onClick={handleObjectClick}
      />
      <path
        id="Туалет №1 7 этаж"
        className={`${className} object`}
        d="M374.9 650.1V519.5h-45.5V650.1h45.5z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 700"
        className={`${className} object`}
        d="M108.6 805.4V519h115.3v130.6h251.6v155.9H108.6Z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 701"
        className={`${className} object`}
        d="M313.5 487V339.5H108.7V487h204.8z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 702"
        className={`${className} object`}
        d="M477.4 487V339.5H313.5V487h163.9z"
        onClick={handleObjectClick}
      />
      <path
        id="Sharipov"
        className={`${className} object`}
        d="M762.1 805.5V602H475.5v203.5h286.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 704"
        className={`${className} object`}
        d="M762.4 517.7V339.5h-285v178.2h285z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 705"
        className={`${className} object`}
        d="M761.6 805.5c.3-14.1.5-28.2.7-42.5.7-54.7.4-108.3-.7-161h84.1v90.8h189.8v112.7H761.6Z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 706"
        className={`${className} object`}
        d="M1051.6 517.7V339.5H762.4v178.2h289.2z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 707"
        className={`${className} object`}
        d="M1331.4 805.5V601.6h-311v91.2h15.2v112.7h295.8Z"
        onClick={handleObjectClick}
      />
      <path
        id="Арендатор 708"
        className={`${className} object`}
        d="M1331.4 517.7V339.5h-279.8v178.2h279.8z"
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default ObjectsSeven;

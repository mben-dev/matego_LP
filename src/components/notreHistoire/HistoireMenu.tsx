import React from "react";

type NotreHistoireMenuItem = {
  label: string;
  href: string;
};

type HistoireMenuProps = {
  notreHistoireMenu: NotreHistoireMenuItem[];
  setSelectedItem: (index: number) => void;
  selectedItem: number;
};

const HistoireMenu: React.FC<HistoireMenuProps> = ({
  notreHistoireMenu,
  setSelectedItem,
  selectedItem,
}) => {
  return (
    <div className="fixed bottom-20 right-16 z-30">
      <ul className="">
        {notreHistoireMenu.map((item, index) => (
          <li
            key={`${item.href}-${index}`}
            className={`flex justify-end items-center space-x-2 cursor-pointer transition-colors ${
              selectedItem === index
                ? selectedItem === 0
                  ? "text-white font-bold"
                  : "text-primary font-semibold"
                : selectedItem === 0
                ? "text-white hover:font-bold"
                : "text-secondary hover:text-primary hover:font-semibold"
            }`}
            onClick={() => setSelectedItem(index)}
          >
            <p>{item.label}</p>
            <p
              className={`${
                selectedItem === 0 ? "text-white" : "text-secondary"
              } text-xl`}
            >
              {selectedItem == index ? "—" : "•"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoireMenu;

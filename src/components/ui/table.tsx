import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

type TableProps = {
  title: string;
  headers?: string[];
  rows?: string[][];
};

const Table: React.FC<TableProps> = ({ title, headers = [], rows = [] }) => {
  const { theme } = useContext(ThemeContext);

  // Clases según el tema
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const headerBg = theme === "dark" ? "bg-gray-800" : "bg-gray-200";
  const oddRowBg = theme === "dark" ? "odd:bg-gray-700" : "odd:bg-white";
  const evenRowBg = theme === "dark" ? "even:bg-gray-600" : "even:bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";

  return (
    <div className="overflow-x-auto">
      {/* <h2 className="text-xl font-semibold mb-2">{title}</h2> */}
      <table className={`min-w-full border ${borderColor}`}>
        <thead>
          <tr className={headerBg}>
            {headers.length > 0 ? (
              headers.map((header, index) => (
                <th key={index} className={`border ${borderColor} px-4 py-2 ${textColor}`}>
                  {header}
                </th>
              ))
            ) : (
              <th className={`border ${borderColor} px-4 py-2 ${textColor}`}>Sin datos</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${oddRowBg} ${evenRowBg}`}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className={`border ${borderColor} px-4 py-2 ${textColor}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length || 1}
                className={`border ${borderColor} px-4 py-2 text-center ${textColor}`}
              >
                Sin datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

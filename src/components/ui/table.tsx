type TableProps = {
  title: string;
  headers?: string[];
  rows?: string[][];
};

const Table: React.FC<TableProps> = ({ title, headers = [], rows = [] }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {headers.length > 0 ? (
              headers.map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {header}
                </th>
              ))
            ) : (
              <th className="border border-gray-300 px-4 py-2">Sin datos</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-white even:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length || 1} className="border border-gray-300 px-4 py-2 text-center">
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

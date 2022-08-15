import React, { FC } from 'react';

interface Props {
  columns: any,
}

const ComponentsTableColumns: FC<Props> = ({ columns }) => {

  return (
    <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
      <tr>
        {columns.map((column: any) => (
          <th className="p-2">
            <div className="font-semibold text-left">{column?.label}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ComponentsTableColumns;

import React from 'react';
import ComponentsTableColumns from './THeader';

const ComponentTable = ({columns, produtos}: any) => {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <ComponentsTableColumns columns={columns} />
              <tbody className="text-sm font-medium divide-y divide-slate-100">
              {columns.map((dataColumn: any) => {
                return (
                  <td className="p-2">
                    {produtos.map((dataProduto: any) => {
                      const value = dataProduto[dataColumn.api];
                      return (
                        <div className="flex items-center">
                          <div className="text-slate-800">{value}</div>
                        </div>
                      )
                    })}
                  </td>
                  )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComponentTable;
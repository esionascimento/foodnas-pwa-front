import React, { Fragment } from 'react';
import ComponentsTableColumns from './THeader';

const ComponentTable = ({columns, produtos}: any) => {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <ComponentsTableColumns columns={columns} />
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {produtos.map((dataProduto: any, index: number) => {
                const par = index%2 === 0;
                return (
                  <tr className={`p-2 ${par ? "bg-slate-500" : "bg-slate-300"}`}>
                    {columns.map((dataColumn: any, index: number) => {
                      const value = dataProduto[dataColumn.api];
                      return (
                        <td className="p-1">
                          <div className="flex items-center">
                            <div className="text-slate-800">{value}</div>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
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
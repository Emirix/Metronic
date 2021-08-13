import { useTable,useSortBy,useFilters } from 'react-table'
import React from "react" 
import ColumnFilter from './ColumnFilter'
 export default function DataTable() {
   const data = React.useMemo(
     () => [
       {
         col1: '22D2',
         col2: 'WAWSSASDASD',
         col3:"123",
         col4:"Nissan",
         col5:"Quash",
         col6:"2012",
         col7:"Gray",
         col8:"New",
         col9:"California",
         col10:"23/21/2021",
         col11:"09/11/2012",
         col12:"5G",
         col13:"Running",
         col14:"sa",
       },

       {
        col1: '22D2',
        col2: 'WasAWSasdsSASDASD',
        col3:"123",
        col4:"Nissan",
        col5:"Quash",
        col6:"2012",
        col7:"Gray",
        col8:"New",
        col9:"California",
        col10:"23/21/2021",
        col11:"09/11/2012",
        col12:"5G",
        col13:"Running",
        col14:"sa",
      },

      {
        col1: '22asD2',
        col2: 'WdsaasAWSSASDASD',
        col3:"122",
        col4:"Nissan",
        col5:"Quash",
        col6:"2012",
        col7:"Gray",
        col8:"New",
        col9:"California",
        col10:"23/21/2021",
        col11:"09/11/2012",
        col12:"5G",
        col13:"Running",
        col14:"sa",
      },

      {
        col1: '22D2',
        col2: 'WAWSSASDASD',
        col3:"123",
        col4:"Nissan",
        col5:"Quash",
        col6:"2012",
        col7:"Gray",
        col8:"New",
        col9:"California",
        col10:"23/21/2021",
        col11:"09/11/2012",
        col12:"5G",
        col13:"Running",
        col14:"sa",
      },
      
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'STK',
         Filter : ColumnFilter,
         accessor: 'col1', 
         
         width:80
       },
       {
         Header: 'VIN',
         Filter : ColumnFilter,
         accessor: 'col2',
         width:140
       },

       {
        Header: 'Serial ID', Filter : ColumnFilter,
        accessor: 'col3',
        width:90
      },

      {
        Header: 'Make', Filter : ColumnFilter,
        accessor: 'col4',
        width:70
      },

      {
        Header: 'Model', Filter : ColumnFilter,
        accessor: 'col5',
        width:70
      },


      {
        Header: 'Year', Filter : ColumnFilter,
        accessor: 'col6',
        width:60
      },

      {
        Header: 'Color', Filter : ColumnFilter,
        accessor: 'col7',
        width:70
      },

      {
        Header: 'Type', Filter : ColumnFilter,
        accessor: 'col8',
        width:60
      },

      
      {
        Header: 'Dealer', Filter : ColumnFilter,
        accessor: 'col9',
        width:80
      },

      
      {
        Header: 'Created', Filter : ColumnFilter,
        accessor: 'col10',
        width:70
      },

      
      {
        Header: 'Updated', Filter : ColumnFilter,
        accessor: 'col11',
        width:70

      },

      
      {
        Header: 'Connection', Filter : ColumnFilter,
        accessor: 'col12',
        width:80
      },

      
      {
        Header: 'Status', Filter : ColumnFilter,
        accessor: 'col13',
        width:90,
        status:"running",
        Cell: ({ cell }) => (
            <span className={"row-status row-status-running"}  >
              {cell.row.values.col13}
            </span>
          )
      },

      {
        Header: 'ACT1', Filter : ColumnFilter,
        accessor: 'col14',
        width:25,
        Cell: ({ cell }) => (
          <div className="refresh-button" >
           
          </div>
        )
    
      },

      {
        Header: 'ACT3', Filter : ColumnFilter,
        accessor: 'col15',width:25,
        Cell: ({ cell }) => (
          <div className="edit-button" >
           
          </div>
        )
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data },useFilters,useSortBy)
 
   return (
     <table {...getTableProps()} >
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 className="datatable-th"
                 style={{width:column.width, maxWidth:column.width}}
               >
                 {column.render('Header')}
                 {column.isSorted ? (column.isSortedDesc ? <svg width="12" height="12" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2L3 1H5L4 2Z" stroke="black" stroke-width="2"/>
</svg>
 : <svg width="12" height="12" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M4 2L5 3L3 3L4 2Z" stroke="black" stroke-width="2"/>
 </svg>
 ) : ""}
                 <div>{column.canFilter ? column.render("Filter"):""}</div>
                
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     className="datatable-td"
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }
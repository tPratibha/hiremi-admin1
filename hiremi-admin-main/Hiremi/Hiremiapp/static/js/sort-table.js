// // Function to sort table by specified column
// function sortTableByColumn(columnIndex) {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("myTable");
//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = table.rows;

//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = parseInt(rows[i].getElementsByTagName("td")[columnIndex].innerText);
//       y = parseInt(rows[i + 1].getElementsByTagName("td")[columnIndex].innerText);

//       if (x < y) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

// // Add event listeners to buttons
// document.getElementById("downloadBtn").addEventListener("click", function() {
//   sortTableByColumn(1); // Sort by Download App (column index 1)
// });

// document.getElementById("verifiedBtn").addEventListener("click", function() {
//   sortTableByColumn(2); // Sort by Account Verified (column index 2)
// });

// document.getElementById("nonVerifiedBtn").addEventListener("click", function() {
//   sortTableByColumn(3); // Sort by Non-Verified (column index 3)
// });

// function sortTableByColumn(columnIndex) {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("#myTable");
//   switching = true;

//   while (switching) {
//     switching = false;
//     rows = table.rows;

//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = parseInt(rows[i].getElementsByTagName("td")[columnIndex].innerText);
//       y = parseInt(rows[i + 1].getElementsByTagName("td")[columnIndex].innerText);

//       if (x < y) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

// // Add event listeners to buttons
// document.getElementById("#downloadBtn").addEventListener("click", function() {
//   sortTableByColumn(1); // Sort by Download App (column index 1)
// });

// document.getElementById("#verifiedBtn").addEventListener("click", function() {
//   sortTableByColumn(2); // Sort by Account Verified (column index 2)
// });

// document.getElementById("#nonVerifiedBtn").addEventListener("click", function() {
//   sortTableByColumn(3); // Sort by Non-Verified (column index 3)
// });
// function sortTable(columnIndex) {
//     const table = document.getElementById("sortableTable");
//     const rows = Array.from(table.rows).slice(1); // Skip the header row
//     const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);

//     rows.sort((rowA, rowB) => {
//         const cellA = rowA.cells[columnIndex].innerText;
//         const cellB = rowB.cells[columnIndex].innerText;

//         if (isNumeric) {
//             return parseFloat(cellA) - parseFloat(cellB);
//         } else {
//             return cellA.localeCompare(cellB);
//         }
//     });

//     // Append sorted rows to the table body
//     rows.forEach(row => table.tBodies[0].appendChild(row));
// }
// let sortOrder = -1;
// function sortTable1(columnIndex) {
//     const table = document.getElementById("sortableTable");
//     const rows = Array.from(table.rows).slice(1); // Skip the header row
//     const isNumeric = !isNaN(rows[0].cells[columnIndex].innerText);
//  sortOrder *= -1;
//     rows.sort((rowA, rowB) => {
//         const cellA = rowA.cells[columnIndex].innerText;
//         const cellB = rowB.cells[columnIndex].innerText;

//         if (isNumeric) {
//             return parseFloat(cellB) - parseFloat(cellA)*sortOrder;
//         } else {
//             return cellB.localeCompare(cellA)*sortOrder;
//         }
//     });

//     // Append sorted rows to the table body
//     rows.forEach(row => table.tBodies[0].appendChild(row));
// }
function sortTableByColumn(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName("td")[columnIndex].innerText);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[columnIndex].innerText);

      if (x < y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Add event listeners to buttons
document.getElementById("downloadBtn").addEventListener("click", function() {
  sortTableByColumn(1); // Sort by Download App (column index 1)
});

document.getElementById("verifiedBtn").addEventListener("click", function() {
  sortTableByColumn(2); // Sort by Account Verified (column index 2)
});

document.getElementById("nonVerifiedBtn").addEventListener("click", function() {
  sortTableByColumn(3); // Sort by Non-Verified (column index 3)
});
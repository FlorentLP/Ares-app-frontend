import * as React from "react";
import { DataTable, useTheme } from "react-native-paper";

export default function MyDataTable() {
  const theme = useTheme();

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([3, 5, 10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Cold shower",
      edit: 356,
      delete: 16,
    },
    {
      key: 2,
      name: "Programming",
      edit: 262,
      delete: 16,
    },
    {
      key: 3,
      name: "Walk 10 000 steps",
      edit: 159,
      delete: 6,
    },
    {
      key: 4,
      name: "Hit the gym",
      edit: 305,
      delete: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title numeric>Edit</DataTable.Title>
        <DataTable.Title numeric>Delete</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.edit}</DataTable.Cell>
          <DataTable.Cell numeric>{item.delete}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={"Rows per page"}
      />
    </DataTable>
  );
}

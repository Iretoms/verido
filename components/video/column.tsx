import { IVideo } from "../../types/index";
import { ColumnDef } from "@tanstack/react-table";

const getStatusColor = (category: string) => {
  switch (category) {
    case "Setup":
      return "bg-light-green border border-verido-green text-verido-green";
    case "Business Success Tip":
      return "bg-light-orange text-verido-orange border border-verido-orange";
    default:
      return "";
  }
};

export const columnsVideo: ColumnDef<IVideo>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "vidoeID",
    header: "Youtube ID",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => {
      const category = getValue<string>();
      return (
        <span className={`px-2 py-1 rounded-lg ${getStatusColor(category)}`}>
          {category}
        </span>
      );
    },
  },
];

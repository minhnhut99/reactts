import {
  cleanup,
  fireEvent,
  render,
  screen,
  setupMockServer,
  user,
  waitFor,
  within,
} from "../__test__";
import ItemBook from "./ItemBook";
const path = "http://629dbe953dda090f3c099c36.mockapi.io/api/v0/books";
const server = setupMockServer((rest) => {
  return [
    // response mặc định khi `path` được request
    rest.get(path, (req, res, ctx) => {
      return res(ctx.json({ greeting: "hello there" }));
    }),
  ];
});

describe("Giao diện", () => {
  test("[正常系] Hiển thị và thay đổi trạng thái một số component khi không có dữ liệu", async () => {
    // Arrange: kết xuất ItemBook
    render(<ItemBook />);
    expect(screen.getByTestId("ul-list-books").childNodes).toHaveLength(0);

    // Assert: khẳng định các component có tồn tại và trạng thái đúng
    // expect(screen.getByTestId("home_toolbar")).toBeInTheDocument(); // <- literal
    // expect(screen.getByTestId("home_table")).toBeInTheDocument();
    // expect(screen.getByTestId("home_pagination")).toBeInTheDocument();

    // expect(screen.getByText("Todo list")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__import_todos")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__export_todos")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__clear_todos")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__create_todo")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__filter")).toBeInTheDocument();
    // expect(screen.getByTestId("btn__import_todos")).toBeEnabled();
    // expect(screen.getByTestId("btn__export_todos")).toBeDisabled();
    // expect(screen.getByTestId("btn__clear_todos")).toBeDisabled();
    // expect(screen.getByTestId("btn__create_todo")).toBeEnabled();
    // expect(screen.getByTestId("btn__filter")).toBeEnabled();
  });

  test("[正常系] Hiển thị và thay đổi trạng thái một số component khi có dữ liệu tồn tại", async () => {
    render(<ItemBook />);

    // Act:
  });
});

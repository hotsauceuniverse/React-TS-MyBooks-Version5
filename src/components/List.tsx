import { Link } from "react-router-dom";
import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { BookType } from "../types";
import moment from "moment";
import { Button, Tooltip } from "antd";

interface BookProps extends BookType {
  deleteBook: (bookId: number) => void;
  Editclick: (bookId: number) => void;
}

const List: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
  deleteBook,
  Editclick,
}) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined />
          {title}
        </Link>
      </div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined />
          {author}
        </Link>
      </div>
      <div>{moment(createdAt).format("MM-DD-YYYY hh:mm a")}</div>
      <div>
        <Tooltip title={url}>
          <a href={url} target="_blank" rel="noreferrer">
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
            />
          </a>
        </Tooltip>
        <Tooltip title="Edit">
          <Button
            size="small"
            shape="circle"
            onClick={clickEdit}
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            onClick={clickdelete}
          />
        </Tooltip>
      </div>
    </div>
  );
  function clickdelete() {
    deleteBook(bookId);
  }
  function clickEdit() {
    Editclick(bookId);
  }
};
export default List;

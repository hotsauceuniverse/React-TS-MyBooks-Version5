import { ForkOutlined } from "@ant-design/icons";
import { Button, Input, message, PageHeader } from "antd";
import TextArea from "antd/lib/input/TextArea";
import TextAreaType from "rc-textarea";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BookReqType } from "../types";
import Layout from "./Layout";

interface AddProps {
  logout: () => void;
  back: () => void;
  loading: boolean;
  Edit: (book: BookReqType) => void;
}

const Detail: React.FC<AddProps> = ({ logout, back, loading, Edit }) => {
  const titleRef = useRef<Input>(null);
  const commentRef = useRef<TextAreaType>(null);
  const authRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);
  const location = useLocation<any>();
  const bookId = location.state.bookId;
  console.log(bookId);

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined />책 추가
          </div>
        }
        subTitle="책을 추가해주세요"
        extra={[
          <Button key={1} type="primary" onClick={logout}>
            로그아웃
          </Button>,
        ]}
      />
      <div>
        <div>
          제목
          <span> *</span>
        </div>
        <div>
          <Input ref={titleRef} placeholder="제목" />
        </div>
        <div>
          코멘트
          <span> *</span>
        </div>
        <div>
          <TextArea ref={commentRef} rows={4} placeholder="코멘트" />
        </div>
        <div>
          저자
          <span> *</span>
        </div>
        <div>
          <Input ref={authRef} placeholder="저자" />
        </div>
        <div>
          URL
          <span>*</span>
        </div>
        <div>
          <Input ref={urlRef} placeholder="URL" />
        </div>
        <div>
          <Button size="large" loading={loading} onClick={click}>
            수정
          </Button>
        </div>
      </div>
    </Layout>
  );
  
  function click() {
    const title = titleRef.current!.state.value;
    const comment = commentRef.current!.resizableTextArea.props.value as string;
    const auth = authRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (title == null && comment === "" && url == null && auth == null) {
      message.error("한개라도 채워주세요");
      return;
    }
    Edit({ title, comment, auth, url });
  }
};

export default Detail;

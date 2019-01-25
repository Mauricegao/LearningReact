import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <div>
        <h4>Comment Generator</h4>
        Click on any avatar to randomize everything!
      </div>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 4:45PM"
          comment={faker.random.words()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 2:00AM"
          comment={faker.random.words()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Yesterday at 5:00PM"
          comment={faker.random.words()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Yesterday at 2:45AM"
          comment={faker.random.words()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

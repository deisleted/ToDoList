import Styles from "./Content.module.css";
import {Created} from "./Created";
import {NewTask} from "./NewTask";
import { Empty } from "./Empty";

export function Content() {
  return (
    <div className={Styles.content} >
      <NewTask />
      <div>
      <Created />
      <Empty />
      </div>
    </div>
  );
}

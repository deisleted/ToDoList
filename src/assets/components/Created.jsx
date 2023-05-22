import Styles from "./Created.module.css";

export function Created() {
    return (
          <div className={Styles.creted}>
            <aside>
              <span>Tarefas criadas </span>
              <label>0</label>
            </aside>
            <aside>
              <span>Concluídas </span>
              <label>0</label>
            </aside>
          </div>
    );
  }
  
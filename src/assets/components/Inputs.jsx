import Styles from "./Inputs.module.css";

export function Input() {
  return (
    <div>
      <input className={Styles} type="text" placeholder="Descrição da tarefa" />
    </div>
  );
}

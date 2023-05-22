import Styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={Styles.empty}>
      <span className={Styles.labes}>
        <img src='src/img/Clipboard.svg' alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </span>


      <div>
        <span className={Styles.newTask}>
        <input type="radio"  />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </span>
         </div>
    </div>
  );
}

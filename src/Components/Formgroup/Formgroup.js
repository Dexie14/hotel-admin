import classes from "./Formgroup.module.css";

const Formgroup = ({label, forms, ...props}) => {
  return (
    <div className={`${classes.formgroup} ${classes[forms]}`}>
     <label className={classes.form_label}>{label}</label>
      <input
      {...props}
      className={classes.form_input}
      />
    </div>
  )
}

export default Formgroup



import React from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import styles from './splash-screen.module.scss'

export default function SplashScreen() {
  const history = useHistory();
  return (
    <div className={styles.pb_splash}>
      <div>
        <h1>nuovoevento</h1>
        <h3>Your Cool Event Start Here</h3>
        <Button value='Schedule Something Cool' addClass="btn-info btn-lg" onClick={() => history.push("/posts")} />
      </div>
    </div>
  );
}

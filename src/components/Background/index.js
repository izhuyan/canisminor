import classnames from "classnames/bind";
import React from "react";
import { SvgIcon } from "../../components";
import styles from "./index.scss";

export default () => {
  const pathname = window.location.pathname;
  const classConfig = classnames.bind(styles)("shape", {
    shape__animation: pathname !== "/",
    shape__about: pathname === "/about",
    shape__blog: pathname === "/blog",
    shape__project: pathname === "/project",
    shape__contact: pathname === "/contact"
  });

  return (
    <div className={styles.box}>
      <SvgIcon className={classConfig} type="bg-shape" />
    </div>
  );
};

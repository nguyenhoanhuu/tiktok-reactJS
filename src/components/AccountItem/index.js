import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_300x300.webp?x-expires=1655798400&x-signature=9o%2BI8punXVOeqB7e9N2Fn2420V0%3D"
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </p>
        <span className={cx("username")}>nguyen van a</span>
      </div>
    </div>
  );
}

export default AccountItem;

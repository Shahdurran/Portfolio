import Image from "next/image";
import styles from "./styles.module.css";

const Avatar = () => {
  return (
    <div
      className={`${styles.animated} flex xl:flex xl:max-w-none pointer-events-none select-none`}
    >
      <Image
        src="/Shah.png"
        alt="avatar"
        width={310}
        height={200}
        className={styles.avatarImage}
      />
    </div>
  );
};

export default Avatar;

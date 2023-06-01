"use client";

import FadeLoader from "react-spinners/ClipLoader";
import styles from "@/styles/page.module.scss";

const Loading = () => {
	return (
		<div className={styles.loading}>
			<FadeLoader
				color={"#f24b21"}
				loading={true}
				aria-label="Loading Spinner"
			/>
		</div>
	);
};

export default Loading;

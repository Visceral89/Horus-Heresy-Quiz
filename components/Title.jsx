"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Title.module.scss";

const Title = ({ loading }) => {
	return (
		<motion.div
			className={styles.container}
			initial={{ scale: 1 }}
			animate={{ scale: loading ? 1 : 0.5, originY: -1.8 }}
			transition={{
				delay: 1,
				duration: 1,
				type: "spring",
				damping: 20,
				stiffness: 100,
			}}
		>
			<Image
				src="/hhlogo.png"
				alt="horus heresy logo"
				width={856}
				height={250}
			/>
		</motion.div>
	);
};

export default Title;

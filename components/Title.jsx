"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Title.module.scss";

const Title = () => {
	return (
		<motion.div className={styles.container}>
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

"use client";

import { motion } from "framer-motion";
import styles from "@/styles/game.module.scss";

const Game = () => {
	return (
		<motion.div
			className={styles.game}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
		>
			Game
		</motion.div>
	);
};

export default Game;

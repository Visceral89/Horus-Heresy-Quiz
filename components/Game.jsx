"use client";

import { motion } from "framer-motion";
import styles from "@/styles/game.module.scss";
import { useState, useEffect } from "react";
import supabase from "@/utils/supabaseClient";

const Game = () => {
	const [quiz, setQuiz] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const startQuiz = () => {
		setQuiz(true);
	};

	useEffect(() => {
		const fetchQuestions = async () => {
			try {
				const { data, error } = await supabase.from("questions").select("*");

				if (error) {
					console.error("Error fetching questions: ", error);
				} else {
					setQuestions(data);
				}
			} catch (error) {
				console.error("Unexpected error: ", error);
			}
		};

		fetchQuestions();
	}, []);

	return (
		<motion.div
			className={styles.game}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0 }}
		>
			{!quiz ? (
				<div className={styles.welcome}>
					<p>
						Welcome to the Horus Heresy Quiz! Are you ready to find out which
						Space Marine Legion you belong to?
					</p>
					<button onClick={startQuiz}>Start Quiz</button>
				</div>
			) : (
				<div>{questions[currentQuestionIndex]?.question}</div>
			)}
		</motion.div>
	);
};

export default Game;

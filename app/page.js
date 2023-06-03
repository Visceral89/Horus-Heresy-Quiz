"use client";

import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Title from "@/components/Title";
import Game from "@/components/Game";
import supabase from "@/utils/supabaseClient";
import { useState, useEffect } from "react";

export default function Home() {
	// Getting Legions
	const [legions, setLegions] = useState([]);

	// Loading State
	const [loading, setLoading] = useState(true);

	// Game State
	const [game, SetGame] = useState(false);

	useEffect(() => {
		const fetchLegions = async () => {
			try {
				const { data, error } = await supabase.from("legions").select("*");
				if (error) {
					console.error("Error fetching legions: ", error);
				} else {
					setLegions(data);
				}
			} catch (error) {
				console.error("Unexpected error: ", error);
			} finally {
				setTimeout(() => {
					setLoading(false);
					SetGame(true);
				}, 2000);
			}
		};

		fetchLegions();
	}, []);

	console.log(legions);

	return (
		<main className={styles.main}>
			<Title />
			{game && <Game /> /*Game Component*/}
		</main>
	);
}

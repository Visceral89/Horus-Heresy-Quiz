"use client";

import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Title from "@/components/Title";
import supabase from "@/utils/supabaseClient";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Home() {
	// Getting Legions
	const [legions, setLegions] = useState([]);

	// Loading State
	const [loading, setLoading] = useState(true);

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
				setLoading(false);
			}
		};

		fetchLegions();
	}, []);

	console.log(legions);

	return (
		<main className={styles.main}>
			<Title />
			{loading && <Loading />}
		</main>
	);
}

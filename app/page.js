import Image from "next/image";
import styles from "@/styles/page.module.scss";
import Title from "@/components/Title";

export default function Home() {
	return (
		<main className={styles.main}>
			<Title />
		</main>
	);
}

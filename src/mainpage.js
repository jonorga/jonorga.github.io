export function lookingForText() {
	document.addEventListener("DOMContentLoaded", async function () {
		const anim_text = document.querySelector("#anim_text");
		const phrase_list = [
			" a great new website",
			" a cutting-edge tool",
			" a robust iOS app",
			" something to help make my work easier",
			" a way to keep track of my clients",
			" a proof-of-concept for my investors",
			" something to help analyze my user base",
			" a scalable database for my clients",
			" a new way to keep in touch with my users",
			" a way to manage work with my team",
			" a helpful tool to get me going on a new project"
		]
		let phrase_sel = Math.floor(Math.random() * phrase_list.length);
		const base_phrase = "I'm looking to create"

		while (true) {
			for (let i = 0; i < 3; i++) {
				anim_text.innerHTML = `${base_phrase}I`;
				await new Promise(r => setTimeout(r, 500));
				anim_text.innerHTML = base_phrase;
				await new Promise(r => setTimeout(r, 500));
			}

			const phrase = phrase_list[phrase_sel];
			if (phrase_sel == phrase_list.length - 1) phrase_sel = 0;
			else phrase_sel++;


			for (let i = 1; i <= phrase.length; i++) {
				anim_text.innerHTML = base_phrase + phrase.slice(0, i) + "I";
				await new Promise(r => setTimeout(r, 100));
			}

			for (let i = 0; i < 3; i++) {
				anim_text.innerHTML = `${base_phrase}${phrase}`;
				await new Promise(r => setTimeout(r, 500));
				anim_text.innerHTML = `${base_phrase}${phrase}I`;
				await new Promise(r => setTimeout(r, 500));
			}

			for (let i = phrase.length; i > 0; i--) {
				anim_text.innerHTML = base_phrase + phrase.slice(0, i) + "I";
				await new Promise(r => setTimeout(r, 70));
			}
		}
	});
}
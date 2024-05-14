export function lookingForText() {
	document.addEventListener("DOMContentLoaded", async function () {
		const anim_text = document.querySelector("#anim_text");
		const phrase_list = [
			" a new website",
			" a great tool",
			" a robust iOS app"
		]
		let phrase_sel = 0;

		while (true) {
			for (let i = 0; i < 3; i++) {
				anim_text.innerHTML = "I'm looking forI";
				await new Promise(r => setTimeout(r, 500));
				anim_text.innerHTML = "I'm looking for";
				await new Promise(r => setTimeout(r, 500));
			}

			const phrase = phrase_list[phrase_sel];
			if (phrase_sel == phrase_list.length - 1) phrase_sel = 0;
			else phrase_sel++;


			for (let i = 1; i <= phrase.length; i++) {
				anim_text.innerHTML = "I'm looking for" + phrase.slice(0, i) + "I";
				await new Promise(r => setTimeout(r, 100));
			}

			for (let i = 0; i < 3; i++) {
				anim_text.innerHTML = `I'm looking for${phrase}`;
				await new Promise(r => setTimeout(r, 500));
				anim_text.innerHTML = `I'm looking for${phrase}I`;
				await new Promise(r => setTimeout(r, 500));
			}

			for (let i = phrase.length; i > 0; i--) {
				anim_text.innerHTML = "I'm looking for" + phrase.slice(0, i) + "I";
				await new Promise(r => setTimeout(r, 70));
			}
		}
	});
}
export function frontendSlides() {
	document.addEventListener("DOMContentLoaded", function () {
		let current_slide = 1;
		const total_slides = document.querySelector("#frontend_content").children.length


		async function changeSlide(oldslide, newslide) {
			const old_div = document.querySelector(`#example_site_${oldslide}`);
			const new_div = document.querySelector(`#example_site_${newslide}`);
			let i = 1;
			while (i > 0) {
				old_div.style.opacity = i;
				i -= 0.05;
				await new Promise(r => setTimeout(r, 20));
			}
			old_div.style.opacity = 0;
			old_div.style.display = "none";
			new_div.style.opacity = 0;
			new_div.style.display = "block";
			i = 0;
			while (i < 1) {
				new_div.style.opacity = i;
				i += 0.05;
				await new Promise(r => setTimeout(r, 20));
			}
			new_div.style.opacity = 1;
		}

		function slideButton(next_slide) {
			if (next_slide) {
				if (current_slide == total_slides) {
					changeSlide(current_slide, 1);
					current_slide = 1;
				}
				else {
					changeSlide(current_slide, current_slide + 1);
					current_slide++;
				}
			}
			else {
				if (current_slide == 1) {
					changeSlide(current_slide, total_slides)
					current_slide = total_slides
				}
				else {
					changeSlide(current_slide, current_slide - 1);
					current_slide--;
				}
			}
		}

		document.querySelector("#back_btn").addEventListener("click", function () { slideButton(false) });
		document.querySelector("#next_btn").addEventListener("click", function () { slideButton(true) });
	});
}
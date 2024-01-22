export function changeSlide(activeSlide: number, content: string, nav: string, active: string) {

	let slides = document.getElementsByClassName(content) as HTMLCollectionOf<HTMLElement>;
	let dots = document.getElementsByClassName(nav) as HTMLCollectionOf<HTMLElement>;

	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(` ${active}`, "");
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[activeSlide - 1].style.display = "flex";
	dots[activeSlide - 1].className += ` ${active}`;
}
//your code here
let ele = null

document.querySelectorAll(".image").forEach(image => {
	image.addEventListener("dragstart" , (e) =>{
		ele = e.target;
	});

	image.addEventListener("dragover" , (e) =>{
		e.preventDefault();
	})

	image.addEventListener("drop", (e)={
		e.preventDefault();
		if(ele != e.target){
			let temp = ele.style.backgroundImage;
			ele.style.backgroundImage = e.target.style.backgroundImage;
			e.target.style.backgroundImage = temp;
		}
	})
})
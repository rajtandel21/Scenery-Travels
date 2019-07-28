let i = 0;
		let j = 0;
		let k = 0;

		let bimages = [];
		let simages = [];
		let pimages = [];

		let binfo = [];
		let sinfo = [];
		let pinfo = [];

		let btime = 3000;
		let stime = 4500;
		let ptime = 5500;

		//All document get calls
		
		let brussleImageContainer = document.getElementById("bPageContainer");
		let switzerlandImageContainer = document.getElementById("sPageContainer");
		let parisImageContainer = document.getElementById("pPageContainer");

		let placeInfoContainer = document.getElementById("bInfoContainer");

		let placeInfoTitle = document.getElementById("binfoTitle")
		let placeAllInfo = document.getElementById("bAllInfo")
		let placeImage = document.getElementById("infoImgID")
		
		let prevLocPlace = "";

		let currentLocInfo;
		let nextLocInfo;

		let allNavigationPlaces = ['b', 's', 'p'];

		let bimgloaded = [];
		let simgloaded = [];
		let pimgloaded = [];

		bimages[0] = './breback/img1.jpg';
		bimages[1] = './breback/img2.jpg';
		bimages[2] = './breback/img3.jpg';

		simages[0] = './swiback/img1.jpg';
		simages[1] = './swiback/img2.jpg';
		simages[2] = './swiback/img3.jpg';

		pimages[0] = './parback/img1.jpg';
		pimages[1] = './parback/img2.jpg';
		pimages[2] = './parback/img3.jpg';

		function loadthis(srcs, imgs, callback) {
			let tempimg;
			let imgRemaining = srcs.length;

			for(let a = 0; a < srcs.length; a++){
				tempimg = new Image();
				tempimg.onload = function() {
					imgRemaining--;
					if(imgRemaining <= 0){
						callback();
					}
				};
				tempimg.src = srcs[a];
				imgs.push(tempimg);
			}
			console.log(imgs);
			
		}
		


		//Look for a way to put the data into a file so that you dont have to call
		//it multiple times differently.

		binfo[0] = ["Brussle Place 1", "Brussle Place 1 Information", "url('./brebanner-imgs/img1.jpg')"];
		binfo[1] = ["Brussle Place 2", "Brussle Place 2 Information", "url('./brebanner-imgs/img2.jpg')"];
		binfo[2] = ["Brussle Place 3", "Brussle Place 3 Information", "url('./brebanner-imgs/img3.jpg')"];
		binfo[3] = ["Brussle Place 4", "Brussle Place 4 Information", "url('./brebanner-imgs/img4.jpg')"];
		binfo[4] = ["Brussle Place 5", "Brussle Place 5 Information", "url('./brebanner-imgs/img5.jpg')"];

		sinfo[0] = ["Switzerland Place 1", "Switzerland Place 1 Information", "url('./swibanner-imgs/img1.jpg')"];
		sinfo[1] = ["Switzerland Place 2", "Switzerland Place 2 Information", "url('./swibanner-imgs/img2.jpg')"];
		sinfo[2] = ["Switzerland Place 3", "Switzerland Place 3 Information", "url('./swibanner-imgs/img3.jpg')"];
		sinfo[3] = ["Switzerland Place 4", "Switzerland Place 4 Information", "url('./swibanner-imgs/img4.jpg')"];
		sinfo[4] = ["Switzerland Place 5", "Switzerland Place 5 Information", "url('./swibanner-imgs/img5.jpg')"];

		pinfo[0] = ["Paris Place 1", "Paris Place 1 Information", "url('./parbanner-imgs/img1.jpg')"];
		pinfo[1] = ["Paris Place 2", "Paris Place 2 Information", "url('./parbanner-imgs/img2.jpg')"];
		pinfo[2] = ["Paris Place 3", "Paris Place 3 Information", "url('./parbanner-imgs/img3.jpg')"];
		pinfo[3] = ["Paris Place 4", "Paris Place 4 Information", "url('./parbanner-imgs/img4.jpg')"];
		pinfo[4] = ["Paris Place 5", "Paris Place 5 Information", "url('./parbanner-imgs/img5.jpg')"];

		
		//add .onload method to add the fade affect to the images.
		//also may be able to use .onload to make other images load after first.
		//may also be able to use setTimeout for delayed but constant image load.

		/*setTimeout used instead of setInterval to be able to change time variable 
		after first use.*/

		function displayChange() {
			document.getElementById("leftback").src = bimgloaded[i].src;
			
			if(i < bimages.length - 1){
				i++;
			} else {
				i = 0;
			}
			setTimeout(displayChange, btime);
			btime = 6000;
		}

		function displayChange2() {
			document.getElementById("centerback").src = simgloaded[j].src;
			
			if(j < simages.length - 1){
				j++;
			} else {
				j = 0;
			}
			setTimeout(displayChange2, stime);
			stime = 6000;
		}

		function displayChange3() {
			document.getElementById("rightback").src = pimgloaded[k].src;

			if(k < pimages.length - 1){
				k++;
			} else {
				k = 0;
			}
			setTimeout(displayChange3, ptime);
			ptime = 6000;
		}


		function navDisplay(x) {
			x.classList.toggle("change");
			let y = document.getElementById("navid");
			if(y.style.display === "flex") {
				y.style.display = "none";
			} else {
				y.style.display = "flex";
				y.style.textAlign = "center";
				y.style.opacity = "0.9";

			}
		}

		function on(x) {
			document.getElementById("mainPageContainer").style.display = "none";
			if(x === 'b') {
				brussleImageContainer.style.display = "flex";
				prevLocPlace = "b";
			} else if(x === 's') {
				switzerlandImageContainer.style.display = "flex";
				prevLocPlace = "s";
			} else {
				parisImageContainer.style.display = "flex";
				prevLocPlace = "p";
			}
		}

		function off() {
			document.getElementById("mainPageContainer").style.display = "grid";
			brussleImageContainer.style.display = "none";
			switzerlandImageContainer.style.display = "none";
			parisImageContainer.style.display = "none";
		}

		function off2() {
			placeInfoContainer.style.display = "none";
			if(prevLocPlace == "b") {
				brussleImageContainer.style.display = "flex";
			} else if (prevLocPlace == "s") {
				switzerlandImageContainer.style.display = "flex";
			} else {
				parisImageContainer.style.display = "flex";
			}
		}

		//This function will display which info to is displayed on image clicked.
		//All info will be in one array but will be split using the first number.
		//The second number is used to determine the info in that section.


		function placeInfo(x, y) {
			placeInfoContainer.style.display = "block";
			brussleImageContainer.style.display = "none";
			switzerlandImageContainer.style.display = "none";
			parisImageContainer.style.display = "none";

			//Avoid repatation by looking for a method to change the array name
			//depending on x value.
			if(x == "b") {
				currentLocInfo = binfo;
				prevLocPlace = x;
			}

			if(x == "s") {
				currentLocInfo = sinfo;
				prevLocPlace = x;
			}

			if(x == "p") {
				currentLocInfo = pinfo;
				prevLocPlace = x;
			}

			placeInfoTitle.innerText = currentLocInfo[y][0];
			placeAllInfo.innerHTML = currentLocInfo[y][1];
			placeImage.style.backgroundImage = currentLocInfo[y][2];

			nextLocInfo = y;
		}

		function previousLocation() {
			brussleImageContainer.style.display = "none";
			switzerlandImageContainer.style.display = "none";
			parisImageContainer.style.display = "none";

			if(allNavigationPlaces.indexOf(prevLocPlace) > 0) {
				on(allNavigationPlaces[allNavigationPlaces.indexOf(prevLocPlace) - 1]);
			} else {
				on('p');
			}
		}

		function nextLocation() {
			brussleImageContainer.style.display = "none";
			switzerlandImageContainer.style.display = "none";
			parisImageContainer.style.display = "none";

			if(allNavigationPlaces.indexOf(prevLocPlace) < (allNavigationPlaces.length - 1)) {
				on(allNavigationPlaces[allNavigationPlaces.indexOf(prevLocPlace) + 1]);
			} else {
				on('b');
			}
		}

		function previousPlaceData() {
			if(nextLocInfo > 0) {
				nextLocInfo--;
			} else {
				nextLocInfo = currentLocInfo.length - 1;
			}
			placeInfoTitle.innerText = currentLocInfo[nextLocInfo][0];
			placeAllInfo.innerHTML = currentLocInfo[nextLocInfo][1];
			placeImage.style.backgroundImage = currentLocInfo[nextLocInfo][2];
		}

		function nextPlaceData() {
			if(nextLocInfo < (currentLocInfo.length - 1)) {
				nextLocInfo++;
			} else {
				nextLocInfo = 0;
			}
			placeInfoTitle.innerText = currentLocInfo[nextLocInfo][0];
			placeAllInfo.innerHTML = currentLocInfo[nextLocInfo][1];
			placeImage.style.backgroundImage = currentLocInfo[nextLocInfo][2];
		}
		
		window.onload = loadthis(bimages, bimgloaded, displayChange), loadthis(simages, simgloaded, displayChange2), loadthis(pimages, pimgloaded, displayChange3);
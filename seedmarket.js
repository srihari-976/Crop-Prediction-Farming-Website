// https://data.gov.in/resources/current-daily-price-various-commodities-various-markets-mandi/api

// Add the page onload option functionality
let loader = document.getElementById('loading');
function myloader(){ 
	 loader.style.display ='none';
}
// End page load functionality
const states= document.getElementById('select_state');
const value='';
	var url = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000017704f08e67e4414747189afb9ef2d662&format=json&offset=0&limit=4000';

	fetch(url)
	.then(response => {
		getData(response.json());
	})
	.catch(err => {
		console.error(err);
	});
	

// Actual get date using this function call
function getData(result) {
	//here resolve the data
	Promise.resolve(result).then(value =>{
		//brack the hole function to differnt function
		console.log(value);
		//Descriptio here
		getDate(value.updated_date);
		getDesc(value.desc);
		getRecords(value.records);
		
	})
}

function getDate(date){
	var update = new Date(date);
	// console.log(update.toDateString());
	document.getElementById('updatedOn').innerHTML = update.toDateString();
}

function getDesc(desc) {
	// console.log(desc);
	document.getElementById('description').innerHTML = desc;
}

function getRecords(record) {
	for(i=0;i<record.length;i++) {
		const sr = i+1;
		// console.log(sr);
		const state = record[i].state;
		// console.log(state);
		const distrcts = record[i].district;
		// console.log(distrcts);
		const market = record[i].market;
		// console.log(market);
		const commodity = record[i].commodity;
		// console.log(commodity);
		const variety = record[i].variety;
		// console.log(variety);
		const min_price= record[i].min_price;
		// console.log(min_price);
		const max_price = record[i].max_price;
		// console.log(max_price);
		const modal_price = record[i].modal_price;
		// console.log(modal_price);
		const tTr = document.createElement('tr');
		tTr.innerHTML ='<th scope="row">'+sr+'</th>'+'\n'+
			'<td>'+state+'</td>'+'\n'+
			'<td>'+distrcts+'</td>'+'\n'+
			'<td>'+market+'</td>'+'\n'+
			'<td>'+commodity+'</td>'+'\n'+
			'<td>'+variety+'</td>'+'\n'+
			'<td>'+min_price+'</td>'+'\n'+
			'<td>'+max_price+'</td>'+'\n'+
			'<td>'+modal_price+'</td>'+'\n';
		document.getElementById('market_price_body').appendChild(tTr);
	}
}


function search(){
	const fillter = document.getElementById('search_input').value.toUpperCase();
	const table = document.getElementById('market_price_body');
	const tr = table.getElementsByTagName('tr');
	for(let i=0; i<tr.length; i++){
		const td= tr[i].getElementsByTagName('td')[1];
		if(td){
			const textvale = td.textContent || td.innerHTML;
			if(textvale.toUpperCase().indexOf(fillter)>-1){
				tr[i].style.display="";
			}else{
				tr[i].style.display ="none";
			}
		}
	}
}


function state(){
	const state_name = document.getElementById('select_state').value.toUpperCase();
	console.log(state_name);
	const table = document.getElementById('market_price_body');
	const tr = table.getElementsByTagName('tr');
	for(let i=0; i<tr.length; i++){
		const td= tr[i].getElementsByTagName('td')[0];
		if(td){
			const textvale = td.textContent || td.innerHTML;
			if(textvale.toUpperCase()==state_name){
				tr[i].style.display="";
			}else{
				tr[i].style.display ="none";
			}
		}
	}
}
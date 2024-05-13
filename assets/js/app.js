const cl = console.log;

const countrycontainer = document.getElementById("countrycontainer");

let result = countries.map(country => {
	
	return `<div class="col-md-3 mb-4">
<div class="country">
<figure class="countrycard p-4">
<img class="countryImg" src="${country.flag}" alt="flag" title="flag">
<figcaption>
<div class="countryinfo p-2">
<div class="row">
<div class="col-12">
<h3 class="countryname text-center">${country.name}</h3>
<p class="mb-0"><b>capital</b>: ${country.capital}</p>
<p class="mb-0"><b>languages</b>:
        ${country.languages}</p>
<p class="mb-0"><b>population</b>: ${country.population}</p>
</div>
</div>
</div>
</div>
</figcaption>
</figure>	
</div>`}).join("");

cl(result);

countrycontainer.innerHTML = result;
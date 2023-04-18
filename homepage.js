function hide_link() {
    document.getElementById('effects_link2').style.display = "none";
    document.getElementById('effects_link3').style.display = "none";
    document.getElementById('effects_link4').style.display = "none";
    }
    
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    
    function warm() {
    var img = document.getElementById("effects_image");
    img.src="Global Warming Stripes.png";
    img.alt="Global Warming Stripes";
    document.getElementById("effects_text").innerHTML=
    "The color of every warming stripe represents a year's relative global average temperature between 1850 and 2017. White represents an average year, while blue represents a cool year and red represents a warm year."
    document.getElementById('effects_source').href="https://www.the-iea.org/";
    document.getElementById('effects_link1').style.display = "block";
    document.getElementById('effects_link2').style.display = "none";
    document.getElementById('effects_link3').style.display = "none";
    document.getElementById('effects_link4').style.display = "none";
    }
    
    function sea() {
    var img = document.getElementById("effects_image");
    img.src="sea_level.jpg";
    img.alt="Sea Level Rise Impact";
    document.getElementById("effects_text").innerHTML=
    "This infographic shows high, intermediate-high, intermediate-low, and low estimates of the number of people who would have to relocate their homes by 2100 as the result of rising sea levels.";
    document.getElementById('effects_source').href="https://www.climatecentral.org/gallery/graphics/sea-level-rise-and-population-impact";
    document.getElementById('effects_link1').style.display = "none";
    document.getElementById('effects_link2').style.display = "block";
    document.getElementById('effects_link3').style.display = "none";
    document.getElementById('effects_link4').style.display = "none";
    }
    
    function food() {
    var img = document.getElementById("effects_image");
    img.src="food.jpg";
    img.alt="The Climate's Effect on Food Supply"
    document.getElementById("effects_text").innerHTML=
    "The dips in the graph show the effect of severe weather events, like the ones that global warming will continue to cause, upon corn harvests in the past.";
    document.getElementById('effects_source').href="https://archive.epa.gov/epa/climate-impacts/climate-impacts-agriculture-and-food-supply.html#:~:text=Climate%20change%20can%20disrupt%20food,result%20in%20reduced%20agricultural%20productivity.";
    document.getElementById('effects_link1').style.display = "none";
    document.getElementById('effects_link2').style.display = "none";
    document.getElementById('effects_link3').style.display = "block";
    document.getElementById('effects_link4').style.display = "none";
    }
    
    function animals() {
    var img = document.getElementById("effects_image");
    img.src="animals.jpg";
    img.alt="Endangered Animals";
    document.getElementById("effects_text").innerHTML=
    "The effects of global warming are dangerous for all species, but especially for endangered species. However, there are currently only plans to protect 18% of all endanged species when 99.8% are at risk.";
    document.getElementById('effects_source').href="https://defenders.org/blog/2019/11/endangered-species-are-overwhelmingly-threatened-climate-change";
    document.getElementById('effects_link1').style.display = "none";
    document.getElementById('effects_link2').style.display = "none";
    document.getElementById('effects_link3').style.display = "none";
    document.getElementById('effects_link4').style.display = "block";
    }
    
    function greenhouse() {
    var img = document.getElementById("causes_image");
    img.src="greenhouse.png";
    img.alt="The Greenhouse Effect"
    document.getElementById("causes_text").innerHTML=
    "An increase in the release of greenhouse gases causes more heat to be trapped in the atmosphere. Greenhouse gases are released through the burning of fossil fuels and, to a lesser extent, deforestation.";
    document.getElementById('causes_source').href="https://www.nrdc.org/stories/greenhouse-effect-101";
    }
    
    function forest() {
    var img = document.getElementById("causes_image");
    img.src="forests.jpg";
    img.alt="Current State of the World's Forests"
    document.getElementById("causes_text").innerHTML=
    "Only 15% of the world's forests remain completely intact. 38% have been fragmented, 19% have been degraded, and 28% have been deforested, contributing to the release of fossil fuels.";
    document.getElementById('causes_source').href="https://www.prnewswire.com/news-releases/cargill-wri-partner-to-monitor-and-manage-deforestation-and-water-risk-across-supply-chains-300238581.html";
    }
    
    function fuel() {
    var img = document.getElementById("causes_image");
    img.src="fuel.png";
    img.alt="Current Usage of Fossil Fuels"
    document.getElementById("causes_text").innerHTML=
    "Governments are currently subsidizing fossil fuel production must more than they are subsidizing renewable fuel production, worsening the problem rather than fixing it."
    document.getElementById('causes_source').href="https://www.odi.org/opinion/10098-g20-fossil-fuel-production-subsidies-numbers";
    }
    
    function gases() {
    var img = document.getElementById("causes_image");
    img.src="greenhouse gases.png";
    img.alt="Greenhouse Gases"
    document.getElementById("causes_text").innerHTML=
    "Carbon dioxide is the most prevelent greenhouse gas, accounting for 76% of all emissions. Flourinated gases account for only 2% of all emissions, yet, per pound, they trap tens of thousands of times more heat than carbon dioxide does, making them a considerable threat."
    document.getElementById('causes_source').href="https://www.nrdc.org/stories/greenhouse-effect-101";
    }